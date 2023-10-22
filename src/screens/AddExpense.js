import { View, Text, Image} from "react-native";
import React from "react";
import { Snackbar } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native";
import { Categories } from "../components/Categories";

const AddExpense = () => {

  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [expenseType, setExpenseType] = useState(1);
  const [selectedDate, setSelectedDate] = useState("DD/MMY/YYY ");


  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSaveExpense = () => {
    setSnackbarVisible(true);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T")[0].split("-");
    const y = x[2] + "-" + x[1] + "-" + x[0];
    setSelectedDate(y);
    hideDatePicker();
  };


  return (
    <View style={{}}>
      <View style={{alignItems:'center', position:'relative'}}>
      <Image style={{height:280,width:340, alignItems:'center', marginTop:20}} source={require('../images/expenseBanner.png')} />
      </View>

      {/* title input  */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginBottom: 5,
          fontWeight: "bold",
          }}
      >
        For What?
      </Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 20,
          marginHorizontal: 20,
          paddingHorizontal: 20,
        }}
      />
      {/* amount input  */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginBottom: 5,
          fontWeight: "bold",

        }}
      >
        How Much?
      </Text>
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        style={{
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 20,
          marginHorizontal: 20,
          paddingHorizontal: 20,
        }}
      />

      {/* date picker  */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginBottom: 5,
          fontWeight: "bold",

        }}
      >
        When?
      </Text>
      <View>
        <TouchableOpacity
          
          style={{
            width: "80%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 20,
          marginHorizontal: 20,
          paddingHorizontal: 20,
          justifyContent: "center",
          }}
        >
          <Text onPress={showDatePicker}>Date : {selectedDate}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
      </View>

      {/* select catregory */}
      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "bold",
        }}
      >
        And Where?
      </Text>
      {/* category list */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 15,
        }}
      >
        {Categories.map((item, index) => {
          return (
            <TouchableOpacity
              style={
                expenseType === item.id
                  ? {
                      backgroundColor: "lightblue",
                      display: "flex",
                      flexDirection: "column",
                      height: 30,
                      paddingHorizontal: 15,
                      borderWidth: 1,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 5,
                      marginBottom: 11,

                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      height: 30,
                      paddingHorizontal: 15,
                      borderWidth: 1,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 5,
                      marginBottom: 11,
                      backgroundColor: "white",
                    }
              }
              key={index}
              onPress={() => setExpenseType(item.id)}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
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
          onPress={handleSaveExpense}
        >
          Add Expense
        </Text>
      </TouchableOpacity>

      {/* snackbar  */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: "OK",
          onPress: () => setSnackbarVisible(false),
        }}
      >
        Expense saved successfully!
      </Snackbar>
    </View>
  );
};

export default AddExpense;
