import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Change the icon library as needed


const categoryIcons={

}
const ActivityCard = ({expense}) => {
    const categoryIcons = {
        Food: 'cutlery',
        Travel: 'plane',
        Health: 'medkit',
        Bills: 'file',
        Entertainment: 'gamepad',
        Education: 'book',
        Shopping: 'shopping-bag',
        Other: 'question-circle',
      };
    
      return (
        <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{expense.title}</Text>
          <Text style={styles.amount}>₹{expense.amount}</Text>
          <Text style={styles.date}>{expense.selectedDate}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name={categoryIcons[expense.expenseType]}
            size={30}
            color="#3498db" // Change the icon color as needed
          />
        </View>
      </View>
      );
    };
    
    const styles = StyleSheet.create({
        card: {
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 16,
            margin: 10,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 6,
            shadowOpacity: 1,
            elevation: 3,
          },
          detailsContainer: {
            flex: 3,
            marginRight: 10,
          },
          iconContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          title: {
            fontSize: 20,
            fontWeight: 'bold',
          },
          amount: {
            fontSize: 18,
          },
          date: {
            fontSize: 14,
            color: 'gray',
          },
        });
        

export default ActivityCard