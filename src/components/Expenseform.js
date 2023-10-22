import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';


const Expenseform = () => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState(new Date());

  const handleAddExpense = () => {
    // Implement the logic to add the expense here
  };

  return (
    <View style={styles.container}>
      <Text>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={expenseName}
        onChangeText={text => setExpenseName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        value={expenseAmount}
        onChangeText={text => setExpenseAmount(text)}
        keyboardType="numeric"
      />
      <DatePicker
        style={styles.datePicker}
        date={expenseDate}
        mode="date"
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={date => setExpenseDate(date)}
      />
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  datePicker: {
    width: '70%',
    marginVertical: 10,
  },
});

export default Expenseform;
