import React from 'react';
import {
    View,  
    Text,
    ImageBackground,
    Image,
    ScrollView,
    Button,
    // Section,
    FlatList
} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

import {
    IconButton,
    TextButton,
    Cards
    // VerticalCourseCard,
    // LineDivider,
    // CategoryCard,
    // HorizontalCourseCard
} from "../components"

import{
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData

} from "../constants";

const Section =({ containerStyle, title, onPress, children }) => {
    return (
        <View
            style={{
                ...containerStyle
            }}
        >

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text 
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                    >
                        {title}
                </Text>
                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="See All"
                    onPress={onPress}
                >


                </TextButton>

            </View>
                    {/* {children} */}
        </View>
    )
}

const HomeScreen = () => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Greeting  */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ ...FONTS.h2 }}>Hello, Kavindu!</Text>
                    <Text 
                    style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}>
                        Sunday, 16th Oct 2022
                    </Text>

                </View>

                {/* Notification */}

                <IconButton
                    icon={icons.notifications}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                ></IconButton>
            </View>
        )
    }

    function renderHorizontalScrollView() {
        return (

            <ScrollView>
              
                    <Text   
                    
                    style={{
                     ...FONTS.h3,
                     marginLeft: 30,
                     color: COLORS.black,
                     

                }}> Select a Ride</Text>
                
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        <Cards imageUri={require('../assets/images/DayCard.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/NightCard.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/NightCard.png')}>

                        </Cards>
                        <Cards imageUri={require('../assets/images/NightCard.png')}>

                        </Cards>
                   
                    </ScrollView>


                </View>


            </ScrollView>        
            
            
            )
    }

        function renderCourses() {
        return (

            <Text   
                    
            style={{
             ...FONTS.h3,
             marginLeft: 30,
             color: COLORS.black,
             

        }}> Select a Ride</Text>
           
            
          

        )

      
    }

    // function renderCategories() {
    //     return (
    //         <Section
    //             title="Categories"
    //         >

    //         <FlatList
    //             horizontal
    //             data={dummyData.categories}
    //             listKey="Categories"
    //             keyExtractor={item => 'Categories-${item.id}'}
    //             showsHorizontalScrollIndicator={false}
    //             contentContainerStyle={{
    //                 marginTop: SIZES.padding
    //             }}
    //             renderItem={({ item, index }) => (
    //                     <CategoryCard
    //                         category={item}
    //                         containerStyle={{
    //                             marginLeft: index == 0 ? SIZES.padding: SIZES.base,
    //                             marginRight: index == dummyData.categories.length - 1 ? SIZES.padding: 0
    //                         }}
    //                     />
    //             )}

    //             />

    //         </Section>
    //     )
    // }

    // function renderPopularCourses() {
    //     return(
    //         <Section
    //         title="Popular Courses"
    //         containerStyle={{
    //             marginTop: 30
    //         }}
    //     >
    
    //     <FlatList
           
    //         data={dummyData.courses_list_2}
    //         listKey="PopularCourses"
    //         scrollEnabled={false}
    //         keyExtractor={item => 'PopularCourses-${item.id}'}
    //         showsHorizontalScrollIndicator={false}
    //         contentContainerStyle={{
    //             marginTop: SIZES.radius,
    //             paddingHorizontal: SIZES.padding
    //         }}
    //         renderItem={({ item, index }) => (
    //                <HorizontalCourseCard
    //                     course={item}
    //                     containerStyle={{
    //                         marginVertical: SIZES.padding,
    //                         marginTop: index == 0 ? SIZES.radius : SIZES.padding
    //                     }}
                   
    //                >
    
    //                </HorizontalCourseCard>
    //         )}
    //         ItemSeparatorComponent={() => (
    //             <LineDivider
    //                     lineStyle={{
    //                         backgroundColor: COLORS.gray20
    //                     }}
                
    //             />
    //         )}
    
    //         />
    
    //     </Section>
    //     )
    
    // }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
 
        {/* header */}
        {renderHeader()}

        {/* cardlist */}
        
       
        {/* Content  */}
        <ScrollView
             contentContainerStyle={{
                paddingBottom: 150
             }} 
             showsVerticalScrollIndicator={false}
        >
            {/* Start Learning */}
             {/* {renderStartLearning()} */}
             {renderHorizontalScrollView()}

             {/* Courses */}
             {/* {renderCourses()} */}

             {/* <LineDivider
                lineStyle={{
                    marginVertical: SIZES.padding
                }}
             /> */}

             {/* Categories */}
             {/* {renderCategories()} */}

             {/* popular Courses */}
             {/* {renderPopularCourses()} */}
        </ScrollView>  
        </View>
    )
}

export default HomeScreen;