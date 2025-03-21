import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

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

const signout = (dispatch) => {
  return () => {
    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
