import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import AuthenticationStyle from '../../src/styles/screens/authentication';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from '../../src/consts/color';
 
const {width, height} = Dimensions.get('window');

export default function ChangePassScreen() {
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

    const handleSubmit = () => {

    }
    
  return (
    <>
     <HeaderWrapper/>
      <Title Title={'CHANGE PASSWORD'} Description={'Please enter your new password'}/>
      <SafeAreaView style={AuthenticationStyle.authWrapper} >
        <KeyboardAvoidingView style={{flex: 1, justifyContent: 'flex-start'}}  >
              {/*password*/}
                        <View style={AuthenticationStyle.action}>
                            <FontAwesome name="lock" color="#8999a8" size={30} />
                            <TextInput secureTextEntry={data.secureTextEntry ? true : false} placeholder="New password" style={AuthenticationStyle.textInput} onChangeText={(val)=>handlePasswordChange(val)}/>
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
                            <TextInput secureTextEntry={data.confirmSecureTextEntry ? true : false} placeholder="Confirm new password" style={AuthenticationStyle.textInput} onChangeText={(val)=>handleConfirmPasswordChange(val)}/>
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
                                <Text style={AuthenticationStyle.loginText}>SUBMIT</Text>
                            </View>
                        </TouchableOpacity>
                                      
        </KeyboardAvoidingView>
                        
         
       
                        

      </SafeAreaView>
    </>
    
  );
}
