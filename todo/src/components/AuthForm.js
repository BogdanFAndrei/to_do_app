/**
 * @fileoverview Reusable authentication form component
 * @module components/AuthForm
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Spacer from './Spacer';
import { Button } from 'react-native';
import { AuthFormStyles } from './styles';

/**
 * AuthForm Component
 * 
 * A reusable form component for authentication screens (signup and signin)
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.headerText - Text to display as the form header
 * @param {string} props.errorMessage - Error message to display if authentication fails
 * @param {Function} props.onSubmit - Function to call when form is submitted
 * @param {string} props.submitButtonText - Text to display on the submit button
 * @returns {JSX.Element} Rendered AuthForm component
 */
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={AuthFormStyles.container}>
      <Spacer />
      <Text style={AuthFormStyles.header}>{headerText}</Text>

      <Text style={AuthFormStyles.label}>Username</Text>
      <TextInput
        style={AuthFormStyles.input}
        placeholder="Please enter your username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />
      <Text style={AuthFormStyles.label}>Email</Text>
      <TextInput
        style={AuthFormStyles.input}
        placeholder="Please enter your email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Spacer />
      <Text style={AuthFormStyles.label}>Password</Text>
      <TextInput
        style={AuthFormStyles.input}
        placeholder="Please enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errorMessage ? <Text style={AuthFormStyles.errorMessage}>{errorMessage}</Text> : null}

      <Spacer />
      <Button 
        style={AuthFormStyles.button}
        title={submitButtonText}
        onPress={() => onSubmit({ username, email, password })}
      />
    </View>
  );
};

export default AuthForm;