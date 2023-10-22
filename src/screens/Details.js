import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

const Details = ({navigation}) => {
  return (
    <View style={{flex:0.40,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30 , marginBottom:100}} >Details</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button onPress={()=>{FIREBASE_AUTH.signOut()}} title ="Logout"/>
    </View>
  )
}

export default Details