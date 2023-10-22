// import { View, Text } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import Details from './screens/Details';
// import { FIREBASE_AUTH } from '../FirebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';
// import { User } from 'firebase/auth';

// const Stack = createStackNavigator();
// const InsideStack = createStackNavigator();
// const OutsideStack= createStackNavigator();

// const InsideStackScreen = () => {
//   return (
//     <InsideStack.Navigator>
//       <InsideStack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown : false  }} />
//       <InsideStack.Screen name="Details" component={Details} options={{headerShown : false  }} />
//     </InsideStack.Navigator>
//   );
// }
//   const OutsideStackScreen = () => {
//     return (
//       <OutsideStack.Navigator>
//         <OutsideStack.Screen name="Login" component={LoginScreen} options={{headerShown : false  }} />
//         <OutsideStack.Screen name="Signup" component={SignupScreen} options={{headerShown : false  }} />
//       </OutsideStack.Navigator>
//     );
// }

// const Navigation = () => {
//     const [user, setUser] = useState(User);

//   useEffect(() => {
//     onAuthStateChanged(FIREBASE_AUTH,(user) => {
//       setUser(user);
//       });
//     }, []);
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         {user?(<Stack.Screen name='Inside'component={InsideStackScreen} options={{headerShown : false  }}/> )
//         :(<Stack.Screen name='Outside' component={OutsideStackScreen} options={{headerShown : false  }} />  )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default Navigation