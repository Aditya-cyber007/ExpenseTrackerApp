import { View, Text,Button ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { PieChart,LineChart,BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';


const ViewExpense = () => {

  const [expenses, setExpenses] = useState([]);
  const [uid, setUid] = useState();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUid(user.uid);
    });
    getExpenses();
    getGroupedData();
  }, []);

  const getExpenses = async () => {
    await fetch(
      `https://expensetracker-50e59-default-rtdb.firebaseio.com/${uid}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const transformedExpenses = [];
        for (const key in data) {
          transformedExpenses.push({
            id: key,
            ...data[key],
          });
        }
        setExpenses(transformedExpenses);
        // console.log(expenses)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const startDate = new Date('2023-10-01');
  // const endDate = new Date('2023-10-08');

  // // Filter expenses within the date range
  // const filteredExpenses = expenses.filter((expense) => {
  //   if (expense.selectedDate === "") {
  //     return false; // Skip invalid date
  //   }
  //   const expenseDate = new Date(expense.selectedDate);
  //   // console.log(expenseDate)
  //   return startDate <= expenseDate && expenseDate <= endDate;
  // });

// console.log(filteredExpenses)

const [labels, setLabels] = useState(['food','travel','shopping','others']);
const [amounts, setAmounts] = useState([20,30,40,50]);

const getGroupedData=()=>{
  const groupedData = {};

  expenses.forEach(expense => {
  
      const category = expense.expenseType;
      const amount = parseFloat(expense.amount);
  
      // Skip invalid or empty amounts and categories
      if (!isNaN(amount) && category) {
          if (groupedData[category]) {
              groupedData[category] += amount;
          } else {
              groupedData[category] = amount;
          }
      }
  }
  );
// const label = Object.keys(groupedData);
// const amount = Object.values(groupedData);
setLabels(Object.keys(groupedData));
setAmounts(Object.values(groupedData));
// console.log(label)
}
console.log(labels)
console.log(amounts)

// console.log(groupedData)
//store category in labels and amount in amounts to show in line chart

  return (
    <View style={{alignItems:'center', position:'relative'}}>
    <Image style={{height:280,width:400, alignItems:'center', marginTop:20}} source={require('../../assets/images/ViewExpense.png')} />
   {/* create a pie chart to show expenses using firebase as database */}
   <View>
  <LineChart
    data={{
      labels: labels,
      datasets:[
        {
          data: amounts
        }
      ]
    }}

    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="₹"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "blue",
      backgroundGradientTo: "#ffa790",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 1
      },
      propsForDots: {
        r: "5",
        strokeWidth: "2",
        stroke: "red"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    </View>
  )
}

export default ViewExpense