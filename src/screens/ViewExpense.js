import { View, Text,Button ,Image} from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

const ViewExpense = () => {
  return (
    <View style={{alignItems:'center', position:'relative'}}>
    <Image style={{height:280,width:400, alignItems:'center', marginTop:20}} source={require('../../assets/images/ViewExpense.png')} />
    </View>
  )
}

export default ViewExpense