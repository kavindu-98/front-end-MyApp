import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { Header, Icon, ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';


const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
          backgroundColor: COLORS.primary,
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
            placeholder: "Friends",
            onChangeText: (event) => {
                searchFilterFunction(event.nativeEvent.text);
            },
        },
    });

  }, [navigation]);
  return (
    // <View style={styles.container}>
    //   {/* upper block */}
    //   <View style={{ height: "30%", backgroundColor: COLORS.white }}>
    //     <View  style={{
    //        flex: 1,
    //        borderBottomLeftRadius: 50,
    //        borderBottomRightRadius: 50,
    //        backgroundColor: COLORS.primary
    //     }}>
           
    //        <View style={styles.header}>
    //         <Animatable.Image
    //             animation="bounceIn"
    //             // duration="1500"
    //             source={require('../assets/images/LOGO.png')}
    //             style={styles.logo}
    //             resizeMode="contain"
    //           />
    //         </View>
    //         <View style={styles.searchBar}>
    //           {/* <SearchBar
    //               placeholder="Type Here..."
    //               // onChangeText={this.updateSearch}
    //               // value={search}
    //           /> */}
    //         </View>
    //     </View>
    //   </View>
    // </View>

        <ScrollView>
        <Text style={styles.textFriends}>Friends</Text>
    

    </ScrollView>
  )
}

export default HomeScreen;

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