import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AddExpense from "./src/screens/AddExpense";
import ViewExpense from "./src/screens/ViewExpense";
import ViewActivity from "./src/screens/ViewActivity";
import Account from "./src/screens/Account";
import ChangeCurrency from "./src/screens/ChangeCurrency";

const Stack = createStackNavigator();
const InsideStack = createStackNavigator();
const OutsideStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const InsideStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Expense") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Analyse") {
            iconName = focused ? "md-options" : "md-options-outline";
          } else if (route.name === "Activity") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4db8ff",
        tabBarInactiveTintColor: "gray",
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        tabStyle: {
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Analyse"
        component={ViewExpense}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Expense"
        component={AddExpense}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Activity"
        component={ViewActivity}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Account}
        options={{ headerShown: false }}
      />
      {/* <InsideStack.Navigator>

      <InsideStack.Screen
      name="ChangeCurrency"
      component={ChangeCurrency}
      options={{ headerShown: false }}
      />
      </InsideStack.Navigator> */}

     
    </Tab.Navigator>
    
  );
};
const OutsideStackScreen = () => {
  return (
    <OutsideStack.Navigator>
      <OutsideStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <OutsideStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </OutsideStack.Navigator>
  );
};

const App = () => {
  const [user, setUser] = useState(User);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Tab.Screen
            name="Inside"
            component={InsideStackScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Outside"
            component={OutsideStackScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
