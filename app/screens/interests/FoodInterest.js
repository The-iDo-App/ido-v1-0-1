//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Food from '../../components/InterestCom/Food';
import NextButton from '../../components/NextButton';

import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const FoodInterest = ({navigation}) => {
    const  [food,setFood] = useState([]);

    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);
    
    const handleSubmit = async() =>{
        if(food.length>0){
            await AsyncStorage.setItem('food', String(food));
            setMessage("Input successfully saved!");
            console.log(food);
            // navigation.navigate('Question');
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        navigation.navigate('Question');
    }
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()}   />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Snackbar message={message} visibleToast={visibleToast}/>
            <Food foodValue={(value) => setFood(value)}/>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => handleSubmit()}  />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default FoodInterest;
