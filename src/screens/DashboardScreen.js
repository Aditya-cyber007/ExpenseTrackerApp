import { Button, StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
// import { signOut } from 'firebase/auth'



const DashboardScreen = ({navigation}) => {

  

  return (
    <View style={{alignItems:'center', position:'relative'}}>
      <Image style={{height:280,width:400, alignItems:'center', marginTop:20}} source={require('../../assets/images/Dashboard.png')} />
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