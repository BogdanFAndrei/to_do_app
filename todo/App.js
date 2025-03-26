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

import { enableScreens } from 'react-native-screens';
enableScreens();

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ToDoListScreen from "./src/screens/todoList/index";
import ToDoCreateScreen from "./src/screens/todoCreate/index";
import ToDoEditScreen from "./src/screens/todoDetail/index";
import SigninScreen from "./src/screens/signin/index";
import SignupScreen from "./src/screens/signup/index";
import AccountScreen from "./src/screens/account/index";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as TodoProvider } from "./src/context/TodoContext";
import { setNavigator } from "./src/navigationRef";
import ResolveAuthScreen from "./src/screens/resolveAuth/index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TodoListStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="ToDoList" 
      component={ToDoListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="ToDoEdit" 
      component={ToDoEditScreen}
      options={({ route }) => ({
        title: route.params?.todo?.title || 'Note Details',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      })}
    />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Signin" component={SigninScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="todoListFlow" 
      component={TodoListStack}
      options={{
        title: 'ToDo List',
        headerShown: true
      }}
    />
    <Tab.Screen name="Account" component={AccountScreen} />
    <Tab.Screen name="ToDoCreate" component={ToDoCreateScreen} />
  </Tab.Navigator>
);

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} />
    <Stack.Screen name="loginFlow" component={LoginStack} />
    <Stack.Screen name="mainFlow" component={MainTabs} />
  </Stack.Navigator>
);

export default () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <NavigationContainer ref={(navigator) => setNavigator(navigator)}>
          <RootStack />
        </NavigationContainer>
      </TodoProvider>
    </AuthProvider>
  );
};
