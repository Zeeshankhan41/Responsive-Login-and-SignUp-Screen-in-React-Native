import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Src/Screen/Login'
import SignUp from './Src/Screen/SignUp'
const Stack =createNativeStackNavigator();

const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator 
  screenOptions={{
    headerShown:false
  }}
  >
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name='SignUp' component={SignUp}/>
  </Stack.Navigator>
</NavigationContainer>   
  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CustomInput from './Src/Screen/Common/CustomInput'

// const App = () => {
//   return (
//     <View>
//      <CustomInput 
//      placeholder="Enter Email"
//      icon={require('../Prac/Src/Image/btn.png')}
//      type={'email'}
//      />

// <CustomInput 
//      placeholder="Enter Password"
//      icon={require('../Prac/Src/Image/btn.png')}
//      type={'password'}
//      />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
