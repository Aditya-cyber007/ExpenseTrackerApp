import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { signOut } from 'firebase/auth'



const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex:.35,justifyContent:'center',alignItems:'center'}}> 
      <Text style={{fontSize:30 , marginBottom:100}} >Dashboard</Text>
      <Button onPress={()=>{FIREBASE_AUTH.signOut()}} title ="Logout"/>
    </View>

  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})