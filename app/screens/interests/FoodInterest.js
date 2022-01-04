//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Food from '../../components/InterestCom/Food';
import NextButton from '../../components/NextButton';

import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';

// create a component
const FoodInterest = ({navigation}) => {
    const  [food,setFood] = useState([]);

    const [message,setMessage] = useState("Processing, please wait.");
    const [visibleToast, setvisibleToast] = useState(false);
    const [posted, setPosted] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);
    
    const postData = async()=>{
        // let keys = await AsyncStorage.getAllKeys();
        //address
        const address = {
                postalCode: await AsyncStorage.getItem('postalCode'),
                city: await AsyncStorage.getItem('city'),
                province: await AsyncStorage.getItem('province'),
                country: await AsyncStorage.getItem('country'),
                street: await AsyncStorage.getItem('street'),
                latitude:await AsyncStorage.getItem('latitude'),
                longitude: await AsyncStorage.getItem('longitude'),
            };

        //user
        let email = await AsyncStorage.getItem('email');
        let password = await AsyncStorage.getItem('password');
        let firstName = await AsyncStorage.getItem('firstName');
        let lastName = await AsyncStorage.getItem('lastName');
        let username = await AsyncStorage.getItem('username');
        let sex = await AsyncStorage.getItem('sex');
        let birthday = await AsyncStorage.getItem('birthday');
        let orientation = await AsyncStorage.getItem('orientation');
        let employment = await AsyncStorage.getItem('employment');

        //single pref
        let minDistance = 100;
        let maxDistance = await AsyncStorage.getItem('distance');
        let genderPref = await AsyncStorage.getItem('genderPref');
        let minAge = 18;
        let maxAge = await AsyncStorage.getItem('max');

        //describe self
        let astrologicalSign = await AsyncStorage.getItem('astrologicalSign');
        let drinks = await AsyncStorage.getItem('drinks');
        let politicalView = await AsyncStorage.getItem('politicalView');
        let religion = await AsyncStorage.getItem('religion');
        let smoke =   await AsyncStorage.getItem('smoke');
        let wantKids = await AsyncStorage.getItem('wantKids');

        //multi select preference
        let books = (await AsyncStorage.getItem('books')).split(',');
        let food = (await AsyncStorage.getItem('food')).split(',');
        let hobbies = (await AsyncStorage.getItem('hobbies')).split(',');
        let movieGenre = (await AsyncStorage.getItem('movieGenre')).split(',');
        let musicGenre = (await AsyncStorage.getItem('musicGenre')).split(',');
        let pets = (await AsyncStorage.getItem('pets')).split(',');
        let sports = (await AsyncStorage.getItem('sports')).split(',');
       
        let avatar = (await AsyncStorage.getItem('avatar'));
        let blurredImage = (await AsyncStorage.getItem('blurredImage'));
        let originalImage = (await AsyncStorage.getItem('originalImage'));
        

        try {
            const response = await axios.post(`${BACKEND_BASEURL}/api/registers/createAccount`, {
                avatar,
                blurredImage,
                originalImage,
                address,
                email,
                password,
                firstName,
                lastName,
                username,
                sex,
                birthday,
                orientation,
                employment,
                minDistance,
                maxDistance,
                genderPref,
                minAge,
                maxAge,
                astrologicalSign,
                drinks,
                politicalView,
                religion,
                smoke,
                wantKids,
                books,
                food,
                hobbies,
                movieGenre,
                musicGenre,
                pets,
                sports,
            });
            if (response.status === 200) {
                setMessage(`Account successfully created!`);
                setPosted(true);
                await AsyncStorage.setItem('userId', response.data.user_id);
                await AsyncStorage.setItem('interestId', response.data.interestId);
                await AsyncStorage.setItem('access_token',  response.data.access_token);
                let id =  await AsyncStorage.getItem('userId');
                let iid = await AsyncStorage.getItem('interestId');
               
                if(id && iid){
                    navigation.navigate('Question');
                }   
            } else {
                setMessage("An error has occurred");
                throw new Error("An error has occurred");
            }
        } catch (error) {
            console.log(error);
            setMessage("An error has occurred");
        }
    }

    const handleSubmit = async() =>{
        if(food.length>0){
            await AsyncStorage.setItem('food', String(food));
            // console.log(food);
            if(posted == false)
                postData();
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        // navigation.navigate('Question');
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
            <HeaderWrapper />
            <BackSkip   onBackPress={()=> navigation.goBack()}   />
            <Title Title="Choose your interests!" Description="Choose at least five" />
            <Snackbar message={message} visibleToast={visibleToast}/>
            <Food foodValue={(value) => setFood(value)}/>
            <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => handleSubmit()}  />
            <View  style={{marginTop: 20}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default FoodInterest;
