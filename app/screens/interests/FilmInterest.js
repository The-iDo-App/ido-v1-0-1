//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Film from '../../components/InterestCom/Film';
import NextButton from '../../components/NextButton';


// create a component
const FilmInterest = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()} onSkipPress={()=> navigation.navigate("PetsInterest")} text={'Skip'}  />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Film />
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> navigation.navigate("PetsInterest")} />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default FilmInterest;
