import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import SignupStyles from './styles'

const SignupScreen = ({ navigation }) => {
    return (<View style={SignupStyles.container}>

            <Text style={SignupStyles.title}>Signup Screen</Text>
            <Text style={SignupStyles.text}>Username</Text>  
            <TextInput style={SignupStyles.input} placeholder="Please enter your username" />
            <Text style={SignupStyles.text}>Email</Text>  
            <TextInput style={SignupStyles.input} placeholder="Please enter your email" />
            <Text style={SignupStyles.text}>Password</Text>
            <TextInput style={SignupStyles.input} placeholder="Please enter your password" />



            <Button style= {SignupStyles.button} title="Signup" onPress={() => navigation.navigate('Signin')} />
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}><Text style={SignupStyles.button2}>Already have an account? {'\n'} Signin</Text></TouchableOpacity>
        </View>
    )
}







export default SignupScreen
