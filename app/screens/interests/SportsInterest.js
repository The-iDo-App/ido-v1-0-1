//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sports from '../../components/InterestCom/Sports';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import NextButton from '../../components/NextButton';
import COLORS from '../../src/consts/color';


// create a component
const SportsInterest = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <HeaderWrapper   />
            <BackSkip text={'Skip'} onBackPress={()=>navigation.goBack()}  onSkipPress={()=>navigation.navigate("HobbyInterest")}  />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Sports />
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=>navigation.navigate("HobbyInterest")} />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default SportsInterest;
