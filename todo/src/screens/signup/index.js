/**
 * @fileoverview SignupScreen component that handles user registration
 * @module screens/signup/SignupScreen
 */

import React from 'react';
import {
  View,
} from "react-native";
import { useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import SignupStyles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";

/**
 * SignupScreen Component
 * 
 * A screen component that handles user registration through username, email, and password.
 * Provides a form for users to sign up and navigation to the signin screen.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.navigation - Navigation object from React Navigation
 * @returns {JSX.Element} Rendered SignupScreen component
 */
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={SignupStyles.container}>
      <AuthForm
        headerText="Sign Up for To Do List"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        isSignup={true}
      />

      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

export default SignupScreen;