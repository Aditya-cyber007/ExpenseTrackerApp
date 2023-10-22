import { View, Text,Button } from 'react-native'
import React from 'react'

const ViewActivity = () => {
  return (
    <View style={{flex:.35,justifyContent:'center',alignItems:'center'}}> 
      <Text style={{fontSize:30 , marginBottom:100}} >View Expense</Text>
      <Button onPress={()=>{FIREBASE_AUTH.signOut()}} title ="Logout"/>
    </View>
  )
}

export default ViewActivity