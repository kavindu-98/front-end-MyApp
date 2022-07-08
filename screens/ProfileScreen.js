import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';


const ProfileScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
          backgroundColor: COLORS.grey,
          height: "25%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,

      },
      headerTintColor: COLORS.white,
      headerTitle: false,
      headerTitle: "",
      headerLeft: () => (
          <View>
              <Animatable.Image
                animation="bounceIn"
                // duration="1500"
                source={require('../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
          </View>

      ),

      headerBottom: () => (
        <Header SearchBar rounded>
          
            <Icon name='search'/>
          
           <TextInput
              
              ref="input"
              placeholder="Search"

              
              
              />

        </Header>
             


              

      ),
      
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      }

      
       
    });

  }, [navigation]);
  return (
   

        <ScrollView>
        <Text style={styles.textFriends}>Profile</Text>
    

    </ScrollView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({

  header: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

},

logo: {
  width: 100,
  padding: "5%",
  marginLeft: 20,
  marginTop: 25

},
container: {
  backgroundColor: COLORS.white,
  height: "100%",
  flex: 1
}


})