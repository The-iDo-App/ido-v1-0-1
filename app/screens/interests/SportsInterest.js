//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sports from '../../components/InterestCom/Sports';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import NextButton from '../../components/NextButton';
import COLORS from '../../src/consts/color';

import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const SportsInterest = ({navigation}) => {
    const  [sports,setSports] = useState([]);

    
    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    const handleSubmit = async() =>{
        if(sports.length>0){
            await AsyncStorage.setItem('sports', String(sports));
            setMessage("Input successfully saved!");
            console.log(sports);
            // navigation.navigate("HobbyInterest");
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        navigation.navigate("HobbyInterest");
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <HeaderWrapper   />
            <BackSkip onBackPress={()=>navigation.goBack()}  onSkipPress={()=>navigation.navigate("HobbyInterest")}  />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Snackbar message={message} visibleToast={visibleToast}/>
            <Sports sportsValue={(value) => setSports(value)}/>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=>handleSubmit()} />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default SportsInterest;
