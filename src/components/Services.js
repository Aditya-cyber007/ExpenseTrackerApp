import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // Change the icon library as needed


const Services = ({xyz}) => {
  return (
    <ScrollView contentContainerStyle={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={xyz}>
          <Text style={styles.buttonText}>Change Currency 
          </Text>
          <Icon
            name='arrow-right'
            size={15}
            color="#3498db" // Change the icon color as needed
          /> 
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Services

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
    },
    button: {
      width: 350,
      height: 50,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      marginVertical: 10,
      paddingHorizontal:20,
    
      shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
                elevation: 3,
    },
    buttonText: {
      fontSize: 18,
      color: 'black',
    },
    })