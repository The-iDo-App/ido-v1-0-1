//import liraries
import React, { useState, useEffect } from 'react';
import { View, Dimensions, LogBox } from 'react-native';
import COLORS from '../../src/consts/color';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderWrapper from '../../components/Header';
import BackSkip from '../../components/BackSkip';
import Title from '../../components/Title';
import NextButton from '../../components/NextButton';
import EnableLocation from '../../components/EnableLocation';
import { ScrollView } from 'react-native-gesture-handler';


import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {height} = Dimensions.get("window")

// create a component
const Address = ({navigation}) => {
    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast,setVisibleToast] = useState(false);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    useEffect(() => {
        setVisibleToast(false)
    }, [visibleToast]);

    const handleSubmit = async() =>{
        if(address){
            await AsyncStorage.setItem("city",address.city);
            await AsyncStorage.setItem("country",address.country);
            await AsyncStorage.setItem("province",address.province);
            await AsyncStorage.setItem("street",address.street);
            await AsyncStorage.setItem("latitude",address.latitude.toString());
            await AsyncStorage.setItem("longitude",address.longitude.toString());
            console.log(address);
            // navigation.navigate("Employment")
        }else{
            setMessage("Please fill in the required fields.");
        }
        setVisibleToast(true);
        navigation.navigate("Employment");
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip onBackPress={()=> navigation.goBack() } onSkipPress={()=> navigation.navigate("Employment")} />
            <ScrollView>
                <Title Title="I live at" Description="Fill in your address or you may click the Enable Location button" />
                <Snackbar message={message} visibleToast={visibleToast}/>
                <EnableLocation addressValue={(value) => setAddress(value)}/>
            </ScrollView>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> handleSubmit()} />
        </SafeAreaView>
    );
};


//make this component available to the app
export default Address;
