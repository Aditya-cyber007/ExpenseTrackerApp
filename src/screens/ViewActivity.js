import { View, Text,Button } from 'react-native'
import React from 'react'
import ActivityCard from '../components/ActivityCard'
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RefreshControl } from 'react-native';
import { useCallback } from 'react';





const ViewActivity = ({navigation}) => {
  //fetch data from firebase real time database
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState();
  const [uid, setUid] = useState();


  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH,(user) => {
      setUid(user.uid);
      });
    getExpenses();
    checkActivity();

  }, []);

  const getExpenses = async () => {
    await fetch( `https://expensetracker-50e59-default-rtdb.firebaseio.com/${uid}.json`)
      .then(res => res.json())
      .then(data => {
        const transformedExpenses = [];
        for (const key in data) {
          transformedExpenses.push({
            id: key,
            ...data[key],
          });
        }
        setExpenses(transformedExpenses);     
        console.log(expenses)
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
      });
  }
 
  // const deleteExpense = async (id) => {
  //   await fetch(`https://expensetracker-50e59-default-rtdb.firebaseio.com/${uid}/${id}.json`, {
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       getExpenses();
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //     });
  // }

  // const editExpense = async (id) => {
  //   await fetch(`https://expensetracker-50e59-default-rtdb.firebaseio.com/${uid}/${id}.json`, {
  //     method: 'PUT',
  //   })
  //     .then(() => {
  //       getExpenses();
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //     });
  // }

  const [showActivity, setShowActivity] = useState(false);
  const checkActivity = () => {
    if (expenses.length === 0 ) {
      setShowActivity(false);
    }
    else{
      setShowActivity(true);
    }
  }

  // refresh on scroll down

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getExpenses();
    checkActivity();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View>
      {showActivity? 
      <ScrollView 
      refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
      <View style={{alignItems:'center', position:'relative'}}>
      <Image style={{height:300,width:400, alignItems:'center', marginTop:20}} source={require('../../assets/images/Activity.png')} />
      </View>
      {expenses.map((expense, index) => (
        <ActivityCard key={index} expense={expense} />
        ))}
    </ScrollView> : 

      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <View  style={{justifyContent:'center', alignItems:'center',marginTop:'50%'}}>
      <Text style={{fontSize:20, fontWeight:'bold', color:'grey'}}>No Expenses</Text>
        <Image style={{height:400,width:400}} source={require('../../assets/images/empty.png')} />
      <TouchableOpacity title="Save" >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            borderRadius: 10,
            borderWidth: 1,
            padding: 8,
            paddingHorizontal: 20,
            backgroundColor: "#14A44D",
            color:'white',
          }}
          onPress={() => navigation.navigate("Expense")}
        >
          Add Expense
        </Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      }
    </View>
  )
}

export default ViewActivity