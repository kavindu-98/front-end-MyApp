import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LoginComponent, SignupComponent } from "../components";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Animated,
  
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextIconButton, PasswordIcon } from "../components";
import * as Animatable from "react-native-animatable";
import SelectBox from 'react-native-multiple-select'

const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080//api/users/login';

function onChange() {
  return (val) => setSelectedTeam(val)
}

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [selectedTeam, setSelectedTeam] = useState({});

  const K_Option = [
    {
      item : '+88',
      id: 'india',
    },
    {
      item : '+97',
      id: 'mal',
    },
    {
      item : '+94',
      id: 'sri',
    },
    {
      item : '+99',
      id: 'ban',
    },
    {
      item : '+70',
      id: 'japan',
    },
    {
      item : '+60',
      id: 'usa',
    },
  ]

 

  const register = async () => {
    const payload = {
      email,
      password,
    };

    try {
      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  let AnimatedHeaderValue = new Animated.Value(0);
  const Header_Max_Height = 150;
  const Header_Min_Height = 40;
 
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height- Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp'
  }) 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <View style={styles.container}>
                    <StatusBar
                        style="auto"
                        />
        
      <Animated.View style={
        [styles.header,
          {
            height: animateHeaderHeight
          }
        ]}>
          
            <TextIconButton
                           
                           icon={icons.left_arrow}
                           customContainerStyle={{
                            marginTop: SIZES.padding2,
                            backgroundColor: COLORS.transparentWhite,
                            width: 60,
                            marginLeft: -6
                          
                        }}
                        customIconStyle={{
                            height: 30
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    /> 
                    
            
          <Text style={styles.Title}>Sign up</Text>
        <View style={styles.button}>

        <TextIconButton
                           label="Log in"
                           customContainerStyle={{
                            width: 130,
                            height: 35,
                            borderRadius: SIZES.radius_btn1,
                            // marginLeft: 15,
                            backgroundColor: COLORS.transparentWhite,
                            alignItems: 'flex-end',
                            justifyContent: 'space-around'
                            
                        }}
                        customLabelStyle={{
                            color: COLORS.red1Font,
                            ...FONTS.h2,
                            alignItems: 'center',
                            marginLeft: -15,
                            fontSize: 20
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    /> 
                   
        </View>
         
      </Animated.View>
     
      <ScrollView
       scrollEventThrottle={16}
       onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: AnimatedHeaderValue}}}],
        {useNativeDriver: false}
       )}
      
      >
      
      <View style={styles.footer}>
        
          <View  style={{ marginTop: SIZES.padding5, margin: SIZES.padding4}}>
                
                <View>
                   <View style={styles.namecontainer}>
                    <View>
                        <Text style={styles.inputTitle}>FIRST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your First Name"
                            autoFocus
                            value={email}
                            onChangeText={text => setEmail(text)}
                          />
                    </View>
                    <View>
                        <Text style={styles.inputTitle}>LAST NAME</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Enter your Last Name"
                            autoFocus
                            value={email}
                            onChangeText={text => setEmail(text)}
                          />
                    </View>
                     
                   </View>
                 
                    <Text style={styles.inputTitle}>EMAIL</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your Email"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />

                  <View style={styles.namecontainer}>
                      <View>
                          <Text style={styles.inputTitle}>COUNTRY CODE</Text>
                           <SelectBox 
                            label = "select country code" 
                            options = {K_Option}
                            value= {selectedTeam}
                            onChange ={onChange()} 
                            hideInputFilter = 'false'
                            />
                      </View>
                      <View>
                          <Text style={styles.inputTitle}>LAST NAME</Text>
                            <TextInput
                              style={styles.input}
                              placeholder="Enter your Last Name"
                              autoFocus
                              value={email}
                              onChangeText={text => setEmail(text)}
                            />
                      </View>
                      
                    </View>
                    <Text style={styles.inputTitle}>EMPLOYEE ID</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                    <Text style={styles.inputTitle}>NIC</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                    <Text style={styles.inputTitle}>GENDER</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                    <Text style={styles.inputTitle}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                  
                </View>

                    <TextIconButton
                      label="SIGN UP"
                      customContainerStyle={{
                      width: "100%",
                      height: 55,
                      borderRadius: SIZES.radius_btn4,
                      marginTop: SIZES.padding1
                      }}
                      customLabelStyle={{
                      color: COLORS.white,
                      alignItems: 'center',
                      marginLeft: -15,
                      ...FONTS.h2,
                      
                      }}
                      // onPress={signup}
                   />
  

          </View>



          
      </View>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.white
  },
  header: {
      // flex: 1,
      flexDirection: 'row',
      
  },
  footer: {
      // flex: 1,
      // height: "70%",
      backgroundColor: '#fff',
      // borderTopLeftRadius: 30,
      // borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  Title: {
    justifyContent: 'flex-end',
    color: COLORS.black,
    ...FONTS.largeTitle,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: -34
    
  },
  namecontainer: {
      flexDirection: 'row',
      width: "100%",
      justifyContent: 'space-between'
  },

 
 
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      // marginLeft: 10,
      alignItems: 'flex-end', 
      marginLeft: 130,
      marginTop: 30

  },

 
  inputTitle: {
    
    ...FONTS.h3,
    fontWeight: 'bold',
    marginTop: SIZES.padding3
  },
  inputSubTitle: {
    
    ...FONTS.h4,
    fontWeight: 'bold',
    marginTop: SIZES.padding3,
    textAlign: 'center'

  },
  input: {
    backgroundColor: COLORS.transparentWhite,
    borderColor: COLORS.outLine,
    borderRadius: 8,
    borderWidth: 1,
    width: "100%",
    height: 50,
    marginTop: SIZES.padding3,
    padding: SIZES.padding2

  },

});
