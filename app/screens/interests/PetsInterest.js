//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Pets from '../../components/InterestCom/Pets';
import NextButton from '../../components/NextButton';

// create a component
const PetsInterest = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()} onSkipPress={()=> navigation.navigate("BookInterest")}  />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Pets/>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> navigation.navigate("BookInterest")} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default PetsInterest;
