import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import SignupStyles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, state } = useContext(AuthContext);

  return (
    <View style={SignupStyles.container}>
      <Text style={SignupStyles.title}>Signup Screen</Text>

      <Text style={SignupStyles.text}>Username</Text>

      <TextInput
        style={SignupStyles.input}
        placeholder="Please enter your username"
        value={username}
        onChangeText={newUsername => setUsername(newUsername)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={SignupStyles.text}>Email</Text>

      <TextInput
        style={SignupStyles.input}
        placeholder="Please enter your email"
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Text style={SignupStyles.text}>Password</Text>

      <TextInput
        style={SignupStyles.input}
        placeholder="Please enter your password"
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      
     
      <Button
        style={SignupStyles.button}
        title="Signup"
        onPress={() => {
          signup(username, email, password);
          navigation.navigate("Signin");
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={SignupStyles.button2}>
          Already have an account? {"\n"} Signin
        </Text>
      </TouchableOpacity>
      {state.errorMessage ? <Text style={SignupStyles.errorMessage}>{state.errorMessage}</Text> : null}
    </View>
  );
};

export default SignupScreen;
