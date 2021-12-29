//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DescribeMe from '../../components/DescribeMe';
import COLORS from '../../src/consts/color';
import BackSkip from '../../components/BackSkip';
import Title from '../../components/Title';
import HeaderWrapper from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height, fontScale } = Dimensions.get("window")

// create a component
const DescribeScreen = ({ navigation }) => {
    const [astrologicalSign, setAstrologicalSign] = useState(null);
    const [religion, setReligion] = useState(null);
    const [politicalView, setPoliticalView] = useState(null);
    const [drinks, setDrinks] = useState(null);
    const [smoke, setSmoke] = useState(null);
    const [wantKids, setWantKids] = useState(null);

    const [message, setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    const handleSubmit = async () => {
        if (astrologicalSign && politicalView && religion && smoke && drinks && wantKids) {
            await AsyncStorage.setItem('astrologicalSign', astrologicalSign);
            await AsyncStorage.setItem('politicalView', politicalView);
            await AsyncStorage.setItem('religion', religion);
            await AsyncStorage.setItem('smoke', smoke);
            await AsyncStorage.setItem('drinks', drinks);
            await AsyncStorage.setItem('wantKids', wantKids);
            console.log(astrologicalSign, politicalView, religion, smoke, drinks, wantKids)
            setMessage("Input successfully saved!");
            // navigation.navigate("SportInterest");
        } else {
            setMessage("Please fill in the required fields.");

        }
        setvisibleToast(true);
        navigation.navigate("SportInterest");

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}  >
            <HeaderWrapper />
            <BackSkip onBackPress={() => navigation.goBack()} text={'Skip'} onSkipPress={() => navigation.navigate("SportInterest")} />
            <Title Title="I describe myself as" Description="Choose only one in each section" />
            <Snackbar message={message} visibleToast={visibleToast} />
            <DescribeMe onPress={() => handleSubmit()}
                astValue={(value) => setAstrologicalSign(value)}
                relValue={(value) => setReligion(value)}
                polValue={(value) => setPoliticalView(value)}
                drinkValue={(value) => setDrinks(value)}
                smokeValue={(value) => setSmoke(value)}
                kidsValue={(value) => setWantKids(value)}
            />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default DescribeScreen;
