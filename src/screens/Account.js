import { View, Text, Button, Image, StyleSheet } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"; // Change the icon library as needed
import { useState } from "react";

const Account = () => {
  
  const[currency,setCurrency]=useState("₹")

  const handleCurrencyChange = () => {
    // Implement your currency change logic here




  };

  const handleUpdatePassword = () => {
    // Implement your password update logic here
  };

  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
    <View>
      <Image
        style={{ height: 280, width: 400, marginTop: 20, alignSelf: "center" }}
        source={require("../../assets/images/Account.png")}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "grey",
          alignSelf: "flex-start",
          padding: 10,
        }}
      >
        Settings
      </Text>
        <ScrollView contentContainerStyle={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>Account</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>Notifications</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>Change Currency</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>Change Password</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>Help and Support</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCurrencyChange}
          >
            <Text style={styles.buttonText}>About</Text>
            <Icon
              name="arrow-right"
              size={15}
              color="#3498db" // Change the icon color as needed
            />
          </TouchableOpacity>
          <TouchableOpacity title="logout">
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            borderRadius: 10,
            borderWidth: 1,
            padding: 8,
            paddingHorizontal: 20,
            backgroundColor: "#ff3333",
            color: "white",
            marginTop:20,
          }}
          // onPress={handleLogout}
        >
          Logout
        </Text>
      </TouchableOpacity>
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 20,

    shadowColor: "rgba(0, 0, 0, 0.2)",
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
    color: "black",
  },
});

export default Account;
