/**
 * @fileoverview Factory function for creating a React Context with reducer and actions
 * @module context/createDataContext
 */

import React, {useReducer} from "react";

/**
 * Creates a React Context with a reducer and bound actions
 * @param {Function} reducer - Reducer function for state management
 * @param {Object} actions - Object containing action creator functions
 * @param {Object} defaultValue - Initial state value
 * @returns {Object} Object containing Context and Provider components
 */
export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();
    
    /**
     * Provider component that wraps the context and provides state and actions
     * @param {Object} props - Component props
     * @param {React.ReactNode} props.children - Child components to be wrapped
     * @returns {JSX.Element} Context Provider component
     */
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider> 
        )
    }

    return {Context, Provider};
}   


