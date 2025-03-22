/**
 * @fileoverview Authentication context for managing user authentication state and actions
 * @module context/AuthContext
 */

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

/**
 * Reducer function for handling authentication state changes
 * @param {Object} state - Current authentication state
 * @param {Object} action - Action object containing type and payload
 * @returns {Object} Updated authentication state
 */
const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

/**
 * Action creator for user signup
 * @param {Function} dispatch - Redux dispatch function
 * @returns {Function} Async function that handles user signup
 */
const signup = (dispatch) => {
  return async ({username, email, password}, callback) => {
    try {
      const response = await trackerApi.post("/signup", {
        username,
        email,
        password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data });
      navigate("ToDoList");
      if (callback) {
        callback();
      }
    
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup",
      });
    }
  };
};

/**
 * Action creator for user signin
 * @param {Function} dispatch - Redux dispatch function
 * @returns {Function} Async function that handles user signin
 */
const signin = (dispatch) => {
  return async (usernameOrEmail, password) => {
    try {
      const response = await trackerApi.post("/signin", {
        usernameOrEmail,
        password,
      });
      dispatch({ type: "signin", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * Action creator for user signout
 * @param {Function} dispatch - Redux dispatch function
 * @returns {Function} Function that handles user signout
 */
const signout = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};

/**
 * Creates and exports the authentication context with provider and actions
 */
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
