import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ToDoListScreen from "./src/screens/todoList/ToDoListScreen";
import ToDoCreateScreen from "./src/screens/todoCreate/ToDoCreateScreen";
import ToDoEditScreen from "./src/screens/todoDetail/ToDoDetailScreen";
import SigninScreen from "./src/screens/signin/SigninScreen";

import SignupScreen from "./src/screens/signup/SignupScreen";
import AccountScreen from "./src/screens/account/AccountScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
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
      <App ref={(navigator) => setNavigator(navigator)} />
    </AuthProvider>
  );
};
