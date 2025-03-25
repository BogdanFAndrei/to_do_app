/**
 * @fileoverview SigninScreen component that handles user authentication
 * @module Screens/Signin/SigninScreen
 */

import {
  View,
} from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import SigninStyles from "./styles";

/**
 * SigninScreen Component
 * 
 * A screen component that handles user authentication through email and password.
 * Provides a form for users to sign in and navigation to the signup screen.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object from React Navigation
 * @returns {JSX.Element} Rendered SigninScreen component
 */
const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={SigninStyles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
       
      />
      <AuthForm
        headerText="Sign In for To Do List"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
        isSignup={false}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />

    </View>
  );
};
SigninScreen.navigationOptions= () =>{
  return {
    header: null
  }
}


export default SigninScreen;