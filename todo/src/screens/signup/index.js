/**
 * @fileoverview SignupScreen component that handles user registration
 * @module Screens/Signup/SignupScreen
 */

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import SignupStyles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";
import Spacer from "../../components/Spacer";
import AuthForm from "../../components/AuthForm";

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
  const { state, signup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={SignupStyles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={() => signup({ username, email, password })}
      >
        <TextInput
          style={SignupStyles.input}
          placeholder="Please enter your username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <TextInput
          style={SignupStyles.input}
          placeholder="Please enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <TextInput
          style={SignupStyles.input}
          placeholder="Please enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </AuthForm>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={SignupStyles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};



export default SignupScreen;