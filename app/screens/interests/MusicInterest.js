//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Music from '../../components/InterestCom/Music';
import NextButton from '../../components/NextButton';

// create a component
const MusicInterest = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip text={'Skip'}  onBackPress={()=> navigation.goBack()} onSkipPress={()=> navigation.navigate("FilmInterest")}  />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Music />
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> navigation.navigate("FilmInterest")} />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};


//make this component available to the app
export default MusicInterest;
