import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from '../constants';

// screens
import {HomeScreen} from "../screens";
import {ProfileScreen} from "../screens";

const Tab = createBottomTabNavigator();


const tabOptions = {
    showLabel : false,
    style : {
        height: "10%"
    }
}



const Tabs = () => {
  return (
   <Tab.Navigator 
  
            tabBarOptions={tabOptions}
            
        screenOptions={({ route }) => ({
            
                tabBarStyle:{
                  backgroundColor:'#ffff',
                  height: "8%",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: -0.5,
                },
                shadowOpacity: 0.6,
                shadowRadius: 16.0,
                elevation: 1,
                },
              
              
            tabBarIcon: ({ focused }) => {
                const tintColor = focused ? COLORS.primary : COLORS.black;
                

                switch (route.name) {
                    case "Home":
                        return(
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Chat":
                        return(
                                <Image
                                source={icons.chats}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Add":
                        return(
                            <Image
                                 source={icons.add}
                                 resizeMode="contain"
                                  style={{
                                        tintColor: tintColor,
                                        width: 45,
                                        height: 45
                                  }}
                            
                            />
                        )
                    case "Notifications":
                        return(
                                <Image
                                source={icons.notifications}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                    case "Profile":
                        return(
                                <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{
                                    tintColor: tintColor,
                                    width: 25,
                                    height: 25
                                }}
                            />
                        )
                        
               
                }
            }
        })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                // options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Chat"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Add"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Notifications"
                component={HomeScreen}
                options={{ headerShown: false}}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                // options={{ headerShown: false}}
            />

   </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({

   
})