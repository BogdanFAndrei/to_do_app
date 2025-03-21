import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState, useContext } from "react";
import SigninStyles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { signin } = useContext(AuthContext);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.title}>Sign In Screen</Text>
      <Text style={SigninStyles.text}>Username or Email</Text>
      <TextInput
        style={SigninStyles.input}
        placeholder="Please enter your username or email"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={SigninStyles.text}>Password</Text>
      <TextInput
        style={SigninStyles.input}
        placeholder="Please enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button
        style={SigninStyles.button}
        title="Signin"
        onPress={() => signin(usernameOrEmail, password)} //need to be changed to add navigation
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={SigninStyles.button2}>
          Don't have an account? {"\n"} Go back to Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;
