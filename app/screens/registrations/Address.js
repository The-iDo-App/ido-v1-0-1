//import liraries
import React, { Component } from 'react';
import { View, Dimensions} from 'react-native';
import COLORS from '../../src/consts/color';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderWrapper from '../../components/Header';
import BackSkip from '../../components/BackSkip';
import Title from '../../components/Title';
import NextButton from '../../components/NextButton';
import EnableLocation from '../../components/EnableLocation';

const {height} = Dimensions.get("window")


// create a component
const Address = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip onBackPress={()=> navigation.goBack() } onSkipPress={()=> navigation.navigate("Employment")} />
            <Title Title="I live at" />
            <EnableLocation />
            <View style={{height: height/2.25}} />
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> navigation.navigate("Employment")} />

        </SafeAreaView>
    );
};


//make this component available to the app
export default Address;
