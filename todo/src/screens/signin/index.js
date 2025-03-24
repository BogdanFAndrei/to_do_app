/**
 * @fileoverview SigninScreen component that handles user authentication
 * @module Screens/Signin/SigninScreen
 */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import AuthForm from "../../components/AuthForm";
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
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={SigninStyles.container}>
      <AuthForm
        headerText="Sign In to Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={() => signin({ email, password })}
      >
        <TextInput
          style={SigninStyles.input}
          placeholder="Please enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <TextInput
          style={SigninStyles.input}
          placeholder="Please enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </AuthForm>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Spacer>
          <Text style={SigninStyles.link}>
            Don't have an account? Sign up instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};


export default SigninScreen;