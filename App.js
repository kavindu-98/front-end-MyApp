import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, WelcomeScreen, SignUpScreen, RoleSelect, SlScreen} from './screens';
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
              initialRouteName={"Home"}
             >
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="Role" component={RoleSelect} /> */}
        {/* <Stack.Screen name="SL" component={SlScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        {/* <Stack.Screen name="Home" component={Tabs} /> */}
        

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})