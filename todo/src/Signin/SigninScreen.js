import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import SigninStyles from "./styles";

const SigninScreen = ({ navigation }) => {
  return (
    <View style={SigninStyles.container}>
      <Text style={SigninStyles.title}>Sign In Screen</Text>
      <Text style={SigninStyles.text}>Username or Email</Text>
      <TextInput
        style={SigninStyles.input}
        placeholder="Please enter your username or email"
      />
      <Text style={SigninStyles.text}>Password</Text>
      <TextInput
        style={SigninStyles.input}
        placeholder="Please enter your password"
      />

      <Button
        style={SigninStyles.button}
        title="Signin"
        onPress={() => navigation.navigate("Signin")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={SigninStyles.button2}>
          Don't have an account? {"\n"} Go back to Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;
