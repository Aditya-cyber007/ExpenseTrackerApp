import { View, Text } from 'react-native'
import React from 'react'

const ChangeCurrencyCard = () => {
   
  axios.get('https://api.exchangeratesapi.io/latest?base=USD')
  .then(response => {
    console.log(response.data.rates)
  })
  .catch(error => {
    console.log(error)
  })

  return (
    <View>
      <Text>ChangeCurrencyCard</Text>
    </View>
  )
}

export default ChangeCurrencyCard