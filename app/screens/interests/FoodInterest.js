//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Food from '../../components/InterestCom/Food';
import NextButton from '../../components/NextButton';

// create a component
const FoodInterest = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()}   />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Food/>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => navigation.navigate('Question')}  />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default FoodInterest;
