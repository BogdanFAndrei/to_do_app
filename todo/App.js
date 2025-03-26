/**
 * Main Application Component
 * 
 * This file serves as the root component of the Todo application.
 * It sets up the navigation structure and authentication flow using React Navigation.
 * 
 * Navigation Structure:
 * - ResolveAuth: Initial authentication check screen
 * - loginFlow: Stack navigator for authentication screens
 *   - Signup: User registration screen
 *   - Signin: User login screen
 * - mainFlow: Bottom tab navigator for main app screens
 *   - todoListFlow: Stack navigator for todo management
 *     - ToDoList: Main todo list screen
 *     - ToDoEdit: Todo item edit screen
 *   - Account: User account management screen
 *   - ToDoCreate: Create new todo item screen
 * 
 * The app is wrapped in an AuthProvider to manage authentication state
 * and uses a custom navigation reference for programmatic navigation.
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import ToDoListScreen from "./src/screens/todoList";
import ToDoCreateScreen from "./src/screens/todoCreate";
import ToDoEditScreen from "./src/screens/todoDetail";
import SigninScreen from "./src/screens/signin";
import SignupScreen from "./src/screens/signup";
import AccountScreen from "./src/screens/account";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/resolveAuth";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
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
