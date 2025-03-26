/**
 * @fileoverview Styles for authentication-related components
 * @module components/styles
 */

import { StyleSheet } from 'react-native';

/**
 * Styles for the AuthForm component
 */
export const AuthFormStyles = StyleSheet.create({
  input: {
    margin: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    margin: 10,
  },    
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    margin: 15,
    marginTop: 140,
  },    
  label: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
    color: '#333',
  },
  helperText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    marginHorizontal: 10,
    fontStyle: 'italic'
  }

});

export default AuthFormStyles;