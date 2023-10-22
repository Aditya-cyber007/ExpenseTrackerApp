import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Auth } from 'firebase/auth';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigateToLogin = () => {
    navigation.navigate('Signup');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    validatePassword(text);
  };

  const validateEmail = (text) => {
    if (!text) {
      setEmailError('Email is required');
    } else if (!isValidEmail(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (text) => {
    if (!text) {
      setPasswordError('Password is required');
    } else if (text.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const auth= FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response=await signInWithEmailAndPassword(auth,  email, password);
      console.log(response)
      alert('User logged in successfully');
      // auth.setPersistence(Auth.Persistence.LOCAL);
    } catch (error) {
      Alert.alert('Signin failed', error.message);
    } finally {
      setLoading(false);
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          I'm a new user {""}
          <Text
            style={styles.footerButton}
            onPress={navigateToLogin}
          >
        SignUp
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 240,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton:{
    color:"red",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize:15,

  },
  errorText: {
    color: 'red',
  },
});

export default LoginScreen;
