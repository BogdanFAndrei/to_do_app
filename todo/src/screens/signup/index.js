/**
 * @fileoverview SignupScreen component that handles user registration
 * @module screens/signup/SignupScreen
 */

import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
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

  return (
    <View style={SignupStyles.container}>
      <AuthForm
        headerText="Sign Up for To Do List"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />

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