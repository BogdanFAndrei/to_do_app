/**
 * @fileoverview Authentication context provider for managing auth state
 * @module context/AuthContext
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

/**
 * Reducer function for managing authentication state
 * @param {Object} state - Current state
 * @param {Object} action - Action object with type and payload
 * @returns {Object} New state
 */
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "try_local_signin":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

/**
 * Action creator for user signup
 * @param {Function} dispatch - Redux dispatch function
 * @returns {Function} Signup function that handles user registration
 */

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token){
    dispatch({type: 'signin', payload: token})
    navigate('mainFlow')
  }else{
    navigate('Signup')
  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "clear_error_message" });
  };
};

const signup =
  (dispatch) =>
  async ({ username, email, password, error }) => {
    if (error) {
      dispatch({
        type: "add_error",
        payload: error,
      });
      return;
    }
    try {
      const response = await trackerApi.post("/signup", { username, email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });

      navigate("mainFlow");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin = (dispatch) => {
  return async ({ username, email, password, error }) => {
    if (error) {
      dispatch({
        type: "add_error",
        payload: error,
      });
      return;
    }
    try {
      const usernameOrEmail = username || email;
      if (!usernameOrEmail || !password) {
        dispatch({
          type: "add_error",
          payload: "Please provide either username or email and password",
        });
        return;
      }
      const response = await trackerApi.post('/signin', { usernameOrEmail, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow");
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {
    // somehow sign out!!!
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);