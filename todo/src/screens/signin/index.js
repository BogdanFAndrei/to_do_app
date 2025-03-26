/**
 * @fileoverview SigninScreen component that handles user authentication
 * @module Screens/Signin/SigninScreen
 */

import React from 'react';
import {
  View,
} from "react-native";
import { useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
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

  useFocusEffect(
    React.useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={SigninStyles.container}>
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

export default SigninScreen;