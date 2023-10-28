import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ChangeCurrencyCard from '../components/ChangeCurrencyCard'
import CountryPicker from 'react-native-country-picker-modal'

const ChangeCurrency = () => {

  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ScrollView>
        <Text>Change Currency</Text>
        <CountryPicker
        withFilter
        withCurrency
        // visible
      />
      </ScrollView>
    </View>
  )
}

export default ChangeCurrency