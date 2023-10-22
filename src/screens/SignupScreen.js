import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';




const SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
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

    const isSignupDisabled = emailError || passwordError || !email || !password;

  // const handleSignup = () => {
  //   if (isSignupDisabled) {
  //     Alert.alert("Please fill the fields")
  //   }
  //   else{
  //       setFullname("");
  //       setPassword("");
  //       Alert.alert('Signup Successful');
  //   }
  // };

    

   
  const auth= FIREBASE_AUTH;
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response=await createUserWithEmailAndPassword(auth,  email, password);
      console.log(response)
      alert('SignUp successfully');
      // navigateToLogin();
    } catch (error) {
      Alert.alert('SignUp failed', error.message);
    } finally {
      setLoading(false);
    }
  }


  const navigateToLogin = () => {
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Create Account,</Text>     
      <Text style={styles.title}>Signup to get started!</Text>
      
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
        ssecureTextEntry={true}
        value={password}
        onChangeText={handlePasswordChange}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Button style={styles.loginButton} title="SignUp" onPress={handleSignup} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          I'm already a member {""}
          <Text
            style={styles.footerButton}
            onPress={navigateToLogin}
          >
        Login
          </Text>
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop:170,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
  },
  title: {
    fontSize: 25,
    marginBottom:15,

  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight:20,
    marginTop:12,
    marginBottom:15,
  },
  loginButton:{
    marginTop:1,
    color:"red",
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

export default SignupScreen;
