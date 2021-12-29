//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
//Authentication
import SignInPage from '../screens/authentication/SignIn';
import SignUpPage from '../screens/authentication/SignUp';
//Registration
import CreateAccount from '../screens/registrations/CreateAccount'; 
import Sexuality from '../screens/registrations/Sexuality';
import Address from '../screens/registrations/Address';
import EmploymentStatus from '../screens/registrations/EmploymentStatus';
//Preference
import Preference from '../screens/preferences/Preference';
import DescribeScreen from '../screens/preferences/DescribeSelf'
//Interests
import SportInterest from '../screens/interests/SportsInterest';
import HobbyInterest from '../screens/interests/HobbyInterest';
import MusicInterest from '../screens/interests/MusicInterest';
import FilmInterest from '../screens/interests/FilmInterest';
import PetsInterest from '../screens/interests/PetsInterest';
import BookInterest from '../screens/interests/BookInterest';
import FoodInterest from '../screens/interests/FoodInterest';
//Question Interest
import Question from '../screens/preferences/Question';

//onboard
import Onboarding from '../screens/Onboarding';

//main screens
import Home from '../screens/main-screens/Home';
import MessageInbox from '../screens/main-screens/MessageInbox';
import Profile from '../screens/main-screens/Profile';
import Settings from '../screens/main-screens/Setting';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainTab(){
  return(
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Messaging" component={MessageInbox}  />
        <Tab.Screen name="Profile" component={Profile}  />
        <Tab.Screen name="Settings" component={Settings}  />
      </Tab.Navigator>
  );
    
  
}


// create a component
const Stacks = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
                <Stack.Screen name="SignIn" options={{header: () => null}}  component={SignInPage} />
                {/* <Stack.Screen name="SignIn" options={{header: () => null}}  component={FoodInterest} /> */}
                <Stack.Screen name="SignUp" options={{header: () => null}} component={SignUpPage} />
                <Stack.Screen name="CreateAccount" options={{header: () => null}} component={CreateAccount} />
                <Stack.Screen name="Sexuality" options={{header: () => null}} component={Sexuality} />
                <Stack.Screen name="Address" options={{header: () => null}} component={Address}/>
                <Stack.Screen name="Employment" options={{header: () => null}} component={EmploymentStatus}/>
                <Stack.Screen name="Preference" options={{header: () => null}} component={Preference}/>
                <Stack.Screen name="Describe" options={{header: () => null}} component={DescribeScreen}/>
                <Stack.Screen name="SportInterest" options={{header: () => null}} component={SportInterest}/>
                <Stack.Screen name="HobbyInterest" options={{header: () => null}} component={HobbyInterest}/>
                <Stack.Screen name="MusicInterest" options={{header: () => null}} component={MusicInterest}/>
                <Stack.Screen name="FilmInterest" options={{header: () => null}} component={FilmInterest}/>
                <Stack.Screen name="PetsInterest" options={{header: () => null}} component={PetsInterest}/>
                <Stack.Screen name="BookInterest" options={{header: () => null}} component={BookInterest}/>
                <Stack.Screen name="FoodInterest" options={{header: () => null}} component={FoodInterest}/>
                <Stack.Screen name="Question"  options={{header: () => null}} component={Question} />
                <Stack.Screen name="Onboarding" options={{header: () => null}} component={Onboarding} />
                <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} title="MainTab"/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};



//make this component available to the app
export default Stacks;
