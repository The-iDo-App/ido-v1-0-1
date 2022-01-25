//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import HobbyCom from '../../components/InterestCom/Hobbies';
import NextButton from '../../components/NextButton';

import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const HobbyInterest = ({navigation}) => {
    const  [hobbies,setHobbies] = useState([]);

    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    const handleSubmit = async() =>{
        if(hobbies.length>0){
            await AsyncStorage.setItem('hobbies', String(hobbies));
            setMessage("Input successfully saved!");
            console.log(hobbies);
            navigation.navigate("MusicInterest")
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        // navigation.navigate("MusicInterest")
    }
    


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()} onSkipPress={()=> navigation.navigate("MusicInterest")} text={'Skip'} />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Snackbar message={message} visibleToast={visibleToast}/>
            <HobbyCom hobbiesValue={(value) => setHobbies(value)} />
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=>  handleSubmit()} />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default HobbyInterest;
