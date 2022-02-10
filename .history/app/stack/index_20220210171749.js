//import liraries
import React, { Component,useState,useEffect, useMemo,useReducer} from 'react';
import { View, Text, StyleSheet,ActivityIndicator, Image, Dimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from '../src/consts/color';
//screens
//Authentication
import SignInPage from '../screens/authentication/SignIn';
import SignUpPage from '../screens/authentication/SignUp';
import ForgotPassScreen from '../screens/authentication/ForgotPass';
import OTPScreen from '../screens/authentication/OTP';
import ChangePassScreen from '../screens/authentication/ChangePass';
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
import MessageBox from '../screens/main-screens/MessageBox';
import Profile from '../screens/main-screens/Profile';
import Settings from '../screens/main-screens/Setting';
import Loading from '../components/ActivityIndicator'
import { AuthContext } from '../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {height} = Dimensions.get('window');


const MessageTab(){
    return(
        <Stack.Navigator>
             <Stack.Screen name="MessageInbox" options={{header: () => null}}  component={SignInPage} />
        </Stack.Navigator>
    )
}



function MainTab(){
  return(
      <Tab.Navigator screenOptions={{ headerShown: false }}   >
        <Tab.Screen 
            name="Home" 
            component={Home}  
            options={{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                         <Image source={require('../src/assets/components/matchFocused.png')} style={{resizeMode:'contain', height:50, width:40}} />
                         :
                         <Image source={require('../src/assets/components/match.png')} style={{resizeMode:'contain', height:50, width:40}} />
                ),
                tabBarLabel: '' ,
                tabBarStyle:{
                    height: height/11,
                    borderTopColor: COLORS.grey,
                    borderTopWidth: 1
                }
            }}

        />
        <Tab.Screen 
            name="Messaging" 
            component={MessageInbox}  
            options={{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                         <Image source={require('../src/assets/components/messageFocused.png')} style={{resizeMode:'contain', height:50, width:40}} />
                         :
                         <Image source={require('../src/assets/components/message.png')} style={{resizeMode:'contain', height:50, width:40}} />
                ),
                tabBarLabel: '' ,
                tabBarStyle:{
                    height: height/11,
                    borderTopColor: COLORS.grey,
                    borderTopWidth: 1
                }
            }}
        />
        <Tab.Screen
            name="Profile" 
            component={Profile}  
            options={{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                         <Image source={require('../src/assets/components/profileFocused.png')} style={{resizeMode:'contain', height:50, width:40}} />
                         :
                         <Image source={require('../src/assets/components/profile.png')} style={{resizeMode:'contain', height:50, width:40}} />
                ),
                tabBarLabel: '' ,
                tabBarStyle:{
                    height: height/11,
                    borderTopColor: COLORS.grey,
                    borderTopWidth: 1
                }
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={Settings}  
            options={{
                tabBarIcon: ({focused}) =>  (
                    focused ?
                         <Image source={require('../src/assets/components/settingsFocused.png')} style={{resizeMode:'contain', height:50, width:40}} />
                         :
                         <Image source={require('../src/assets/components/settings.png')} style={{resizeMode:'contain', height:50, width:40}} />
                ),
                tabBarLabel: '',
                tabBarStyle:{
                    height: height/11,
                    borderTopColor: COLORS.grey,
                    borderTopWidth: 1
                }
            }}
        />
      </Tab.Navigator>
  );
    
  
}


// create a component
const Stacks = () => {
    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch( action.type ) {
            case 'RETRIEVE_TOKEN': 
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN': 
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT': 
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER': 
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };
    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(()=>({
        signIn: (username,token)=>{
            dispatch({type:'LOGIN',id:username,token});
        },
        signOut: async()=>{
            await AsyncStorage.removeItem("access_token");
            dispatch({type:'LOGOUT'});
        },
        signUp: (username,token)=>{
            dispatch({type:'REGISTER',id:username,token});

        }
    }));

    useEffect(() => {
        setTimeout(async() => {
            const token = await AsyncStorage.getItem("access_token");
            dispatch({type:'RETRIEVE_TOKEN',token});
        }, 1000);
    }, []);
    
    if(loginState.isLoading){
        return (
            <Loading/>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken === null ?(
                    <Stack.Navigator screenOptions={{headerShown: false}} >
                        <Stack.Screen name="SignIn" options={{header: () => null}}  component={SignInPage} />
                        <Stack.Screen name="SignUp" options={{header: () => null}} component={SignUpPage} />
                        <Stack.Screen name="ForgotPass" options={{header: () => null}}  component={ForgotPassScreen} />
                        <Stack.Screen name="OTP" options={{header: () => null}} component={OTPScreen} />
                        <Stack.Screen name="ChangePass" options={{header: () => null}} component={ChangePassScreen} />
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
                    </Stack.Navigator>
                ):(
                    <Stack.Navigator screenOptions={{headerShown: false}} >
                        <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} title="MainTab"/>
                    </Stack.Navigator>
                )}
            </NavigationContainer>
       </AuthContext.Provider> 
    );
};



//make this component available to the app
export default Stacks;
