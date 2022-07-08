import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LoginComponent, SignupComponent} from '../components';
import { View, Text, TextInput, StyleSheet,KeyboardAvoidingView, StatusBar,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Button} from 'react-native-elements';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { TextIconButton} from "../components"
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const API_URL = 'http://192.168.1.107:8080/api/users/';

const SignUpScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pic, setPic] = useState('');
    const [field, setField] = useState([]);
  

    const signup = () => {
        const payload = {
          name,
          email,
          password,
        };
    
        try {
          fetch(`${API_URL}/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          navigation.navigate('Home');
          setName('');
          setPassword('');
          setConfirmPassword('');
          setEmail('');
          setPic('');
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} > 
    <View style={styles.container}>
                    <StatusBar
                        style="auto"
                        />
        
      <View style={styles.header}>
        <View style={styles.button}>
        <TextIconButton
                           label="Login"
                           customContainerStyle={{
                            width: 130,
                            height: 35,
                            borderRadius: SIZES.radius_btn1,
                            marginLeft: 15,
                            backgroundColor: COLORS.transparentWhite,
                            // flexDirection: 'flex-end'
                            
                        }}
                        customLabelStyle={{
                            color: COLORS.grey,
                            alignItems: 'center',
                            marginLeft: -15,
                            fontSize: 20
                        }}
                        onPress={() => {navigation.navigate('Login')}}
                    /> 
                   
        </View>
         
      </View>
     
      <ScrollView>
      
      <KeyboardAvoidingView style={styles.footer}>
        	<View 
            style={styles.button}
            > 
            
                    
          </View>
          <Animatable.View  animation= "fadeInRight"  style={{ marginTop: SIZES.padding3, margin: SIZES.padding4}}>
                
                <View>
                      <Text style={styles.inputTitle}>FIRST NAME</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    autoFocus
                    value={name}
                    onChangeText={text => setName(text)}
                  />
                  <Text style={styles.inputTitle}>EMAIL</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    autoFocus
                    value={email}
                    onChangeText={text => setEmail(text)}
                  />
                    <Text style={styles.inputTitle}>COUNTRY CODE</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
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
                    <Text style={styles.inputTitle}>RE-ENTER PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Re-enter your password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
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
                      onPress={signup}
                   />
  

          </Animatable.View>



          
      </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </TouchableWithoutFeedback>

    
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: COLORS.primary
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute'
  },
  footer: {
      flex: 1,
      // height: "70%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },

  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  tab: {
     backgroundColor: COLORS.primary
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
      marginLeft: 10,
      flexDirection: 'row', 

  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
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
