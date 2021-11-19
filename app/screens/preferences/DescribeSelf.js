//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import DescribeMe from '../../components/DescribeMe';
import COLORS from '../../src/consts/color';
import BackSkip from '../../components/BackSkip';
import Title from '../../components/Title';
import HeaderWrapper from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';


const {width, height, fontScale} = Dimensions.get("window")

// create a component
const DescribeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >  
            <HeaderWrapper />
            <BackSkip onBackPress={()=> navigation.goBack()}   onSkipPress={()=> navigation.navigate("SportInterest")} />
            <ScrollView>
                 <Title Title="I describe myself as" Description="Choose only one in each section" />
                <DescribeMe  onPress={() => navigation.navigate("SportInterest")} />
                
            </ScrollView>
           
           

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
   
});

//make this component available to the app
export default DescribeScreen;
