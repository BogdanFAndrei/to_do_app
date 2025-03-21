import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case "signup":
            return {...state, token: action.payload};
        case "add_error":
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
}

const signup = (dispatch) => {
    return async (username, email, password) => {
        try {
            const response = await trackerApi.post("/signup", {username, email, password});
            console.log(response.data);
            dispatch({type: "signup", payload: response.data});
        } catch (error) {
            dispatch({type: "add_error", payload: "Something went wrong with signup"});
        }
    }
}

const signin = (dispatch) => {
    return async (usernameOrEmail, password) => {
        try {
            const response = await trackerApi.post("/signin", {usernameOrEmail, password});
            dispatch({type: "signin", payload: response.data});
        } catch (error) {
            console.log(error);
        }
    }
}

const signout = (dispatch) => {
    return () => {
        dispatch({type: "signout"});
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSigneIn: false, errorMessage: "" },


    
)
