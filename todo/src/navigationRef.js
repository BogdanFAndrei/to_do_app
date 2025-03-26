/**
 * @fileoverview Navigation reference module for handling navigation outside of React components
 * @module navigationRef
 */

import { createNavigationContainerRef } from '@react-navigation/native';

/**
 * Global navigator reference
 * @type {Object}
 */
let navigator;

/**
 * Sets the global navigator reference
 * @param {Object} nav - Navigation object from React Navigation
 */
export const setNavigator = (nav) => {
    navigator = nav;
};

/**
 * Navigates to a specified route with optional parameters
 * @param {string} routeName - Name of the route to navigate to
 * @param {Object} [params] - Optional parameters to pass to the route
 */
export const navigate = (routeName, params) => {
    if (routeName === 'Signup' || routeName === 'Signin') {
        navigator.navigate('loginFlow', { screen: routeName, ...params });
    } else {
        navigator.navigate(routeName, params);
    }
};
