import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthenticationStyle from '../../src/styles/screens/authentication';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';

export default function SignUpPage({navigation}) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });

    const textInputChange = (val) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(val.length !== 0 &&  data.email.match(emailRegex)){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data, 
            password: val
        });
    }

       const handleConfirmPasswordChange = (val) => {
        setData({
            ...data, 
            confirmPassword: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry,
        });
    }


    const handleSubmit = async() =>{
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if(!data.email.match(emailRegex)){
            setMessage("Invalid email format.");
        }else if(data.password.length < 6){
            setMessage("Password must be at least 6 characters long.");
        }else{
            if(userExisting){
                setMessage("Email already exists in the system.");
            }
            else if((data.password === data.confirmPassword) && data.password !== '' && data.email.match(emailRegex)){
                setMessage("Input successfully saved!");
                await AsyncStorage.setItem('email',data.email);
                await AsyncStorage.setItem('password',data.password);
                navigation.navigate('VerificationOTP');
            }else{
                setMessage("Invalid Credentials! Please try again.");
            }
        }
        // navigation.navigate('CreateAccount');
        setvisibleToast(true);
        return;
    }
    
    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);
    
    const [userExisting,setUserExisting] = useState(false);
    useEffect(async() => {
        const fetchUsers = async() =>{
            const email = data.email;
            let user = await axios.post(`${BACKEND_BASEURL}/api/registers/`, {email});
        

            if(user.data.user) return setUserExisting(true);
            return setUserExisting(false);
        }
       fetchUsers();
    }, [data.email]);

    return (
        <SafeAreaView style={AuthenticationStyle.authWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <StatusBar style="auto" />
                     {/*Logo*/}
                        <Snackbar message={message} visibleToast={visibleToast}/>
                        <View style={AuthenticationStyle.logoWrapper}>
                           <Image source={require('../../src/assets/adaptive-icon.png')} resizeMode='contain' style={AuthenticationStyle.logo}/>
                        </View>
                        {/*Log in to continue*/}
                        <View style={AuthenticationStyle.textWrapper}>
                            <Text style={AuthenticationStyle.textText}>Register to continue</Text>
                        </View>
                        {/*email address*/}
                        <View style={AuthenticationStyle.action}>
                            <FontAwesome name="envelope" color="#8999a8" size={20} />
                            <TextInput placeholder="example@email.com" style={AuthenticationStyle.textInput} onChangeText={(val)=>textInputChange(val)} />
                            {data.check_textInputChange ?
                            <Feather name="check-circle" color="#77BC7E" size={20} />
                            : null}
                        </View>
                        {/*password*/}
                        <View style={AuthenticationStyle.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.secureTextEntry ? true : false} placeholder="Password" style={AuthenticationStyle.textInput} onChangeText={(val)=>handlePasswordChange(val)}/>
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ?
                                    <Feather name="eye-off" color="#91C2D0" size={20}/>
                                    : 
                                    <Feather name="eye" color={COLORS.blue} size={20}/>
                                }
                            </TouchableOpacity>
                            
                            
                        </View>
                        {/*Confirm password*/}
                        <View style={AuthenticationStyle.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.confirmSecureTextEntry ? true : false} placeholder="Confirm password" style={AuthenticationStyle.textInput} onChangeText={(val)=>handleConfirmPasswordChange(val)}/>
                            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                                {data.confirmSecureTextEntry ?
                                    <Feather name="eye-off" color="#91C2D0" size={20}/>
                                    : 
                                    <Feather name="eye" color={COLORS.blue} size={20}/>
                                }
                            </TouchableOpacity>
                            
                            
                        </View>
                        
                        {/*Log in button*/}
                        <TouchableOpacity onPress={()=> handleSubmit()}>
                            <View style={AuthenticationStyle.loginBtn}>
                                <Text style={AuthenticationStyle.loginText}>REGISTER</Text>
                            </View>
                        </TouchableOpacity>
                       
                       
                        {/*Don' have an account? Create an account!*/}     
                        <View style={AuthenticationStyle.noAccountWrap}>
                            <Text style={AuthenticationStyle.noAccountText}>Already have an account?&nbsp;</Text>
                            <TouchableOpacity onPress={()=> navigation.goBack()}>
                                <Text style={AuthenticationStyle.noAccountLink}>Log in!</Text>
                            </TouchableOpacity>
                        </View>       
                </View>
            </ScrollView>
        </SafeAreaView>
    );



}

