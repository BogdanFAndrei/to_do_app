import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import ToDoListScreen from './src/ToDoListScreen'
import ToDoCreateScreen from './src/ToDoCreateScreen'
import ToDoEditScreen from './src/ToDoDetailScreen'
import SigninScreen from './src/SigninScreen'

import SignupScreen from './src/SignupScreen'
import AccountScreen from './src/AccountScreen'


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



