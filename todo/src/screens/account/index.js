import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import Spacer from "../../components/Spacer";
import AccountStyles from "./styles";
import { Context as AuthContext } from "../../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Spacer />
      <View>
        <Text style={AccountStyles.title}>Account Screen</Text>
        <Spacer />
        <Button title="Sign Out" onPress={signout} />
        <Spacer />
      </View>
    </>
  );
};



export default AccountScreen;
