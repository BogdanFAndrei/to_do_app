import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { useState } from 'react'

const SigninScreen = ({ navigation }) => {
    return (<View style={styles.container}>

            <Text style={ styles.title}>Sign In Screen</Text>
            <Text style={styles.text}>Username or Email</Text>  
            <TextInput style={styles.input} placeholder="Please enter your username or email" />
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} placeholder="Please enter your password" />



            <Button style= {styles.button} title="Signin" onPress={() => navigation.navigate('Signin')} />
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}><Text style={styles.button2}>Don't have an account? {'\n'} Go back to Signup</Text></TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
     
        width: '100%',
        borderRadius: 10,
    },
    text: {
       
        margin: 5,
        color: 'black',
        fontSize: 20,
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    button2: {
        fontSize:20,
        textAlign: 'center',
        color: 'blue',
        padding: 10,
        margin: 10,
        width: '100%',
    }
})


export default SigninScreen
