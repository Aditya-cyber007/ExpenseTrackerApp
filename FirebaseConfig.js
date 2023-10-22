// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth';


    const firebaseConfig   = {
        apiKey: "AIzaSyDEv2c_cva3xJzFPBUUSVxCUb5Huk8UBDM",
        authDomain: "expensetracker-50e59.firebaseapp.com",
        projectId: "expensetracker-50e59",
        storageBucket: "expensetracker-50e59.appspot.com",
        messagingSenderId: "821299147428",
        appId: "1:821299147428:web:2df025187418eca5f26c31",
        measurementId: "G-618QRML51T"
      }
      

      
// export const Persistence = auth.setPersistence(Auth.Persistence.LOCAL);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});