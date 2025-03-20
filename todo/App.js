import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import ToDoListScreen from './src/ToDoList/ToDoListScreen'
import ToDoCreateScreen from './src/ToDoCreate/ToDoCreateScreen'
import ToDoEditScreen from './src/ToDoDetail/ToDoDetailScreen'
import SigninScreen from './src/Signin/SigninScreen'

import SignupScreen from './src/Signup/SignupScreen'
import AccountScreen from './src/Account/AccountScreen'


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

})

export default createAppContainer(switchNavigator)



