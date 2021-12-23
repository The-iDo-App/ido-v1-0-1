//import liraries
import React, { useEffect } from 'react';
import { View, Dimensions, LogBox } from 'react-native';
import COLORS from '../../src/consts/color';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderWrapper from '../../components/Header';
import BackSkip from '../../components/BackSkip';
import Title from '../../components/Title';
import NextButton from '../../components/NextButton';
import EnableLocation from '../../components/EnableLocation';
import { ScrollView } from 'react-native-gesture-handler';

const {height} = Dimensions.get("window")


// create a component
const Address = ({navigation}) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip text={'Skip'} onBackPress={()=> navigation.goBack() } onSkipPress={()=> navigation.navigate("Employment")} />
            <ScrollView>
                <Title Title="I live at" Description="Fill in your address or you may click the Enable Location button" />
                <EnableLocation />
            </ScrollView>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> navigation.navigate("Employment")} />
        </SafeAreaView>
    );
};


//make this component available to the app
export default Address;
