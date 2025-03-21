import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ToDoListScreen from "./src/Screens/ToDoList/ToDoListScreen";
import ToDoCreateScreen from "./src/Screens/ToDoCreate/ToDoCreateScreen";
import ToDoEditScreen from "./src/Screens/ToDoDetail/ToDoDetailScreen";
import SigninScreen from "./src/Screens/Signin/SigninScreen";

import SignupScreen from "./src/Screens/Signup/SignupScreen";
import AccountScreen from "./src/Screens/Account/AccountScreen";

import {Provider as AuthProvider} from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    todoListFlow: createStackNavigator({
      ToDoList: ToDoListScreen,
      ToDoEdit: ToDoEditScreen,
    }),
    Account: AccountScreen,
    ToDoCreate: ToDoCreateScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  );
};
