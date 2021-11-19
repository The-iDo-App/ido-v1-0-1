import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthenticationStyle from '../../src/styles/screens/authentication';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import COLORS from '../../src/consts/color';
import Users from '../../models/Users';
import * as Animatable from 'react-native-animatable';



export default function SignInPage({navigation}){
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
      
    });


    const textInputChange = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    }

    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data, 
                password: val,
                isValidPassword: true,
            });
        }
        else{
            setData({
                ...data, 
                password: val,
                isValidPassword: false,
            }); 
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    const handleValidUser = (val) => {
        if(val.trim().length >= 4 ){
            setData({
                ...data,
                isValidUser: true
            });
        }
        else{
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

        return (
            <SafeAreaView style={AuthenticationStyle.authWrapper}>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <StatusBar style="auto"/>
                        {/*Logo*/}
                        <View style={AuthenticationStyle.logoWrapper}>
                            <Image source={require('../../src/assets/adaptive-icon.png')} resizeMode='contain' style={AuthenticationStyle.logo}/>
                        </View>
                        {/*Log in to continue*/}
                        <View style={AuthenticationStyle.textWrapper}>
                            <Text style={AuthenticationStyle.textText}>Log in to continue</Text>
                        </View>
                        {/*email address*/}
                        <View style={AuthenticationStyle.action}>
                            <FontAwesome name="envelope" color="#8999a8" size={20} />
                            <TextInput placeholder="example@email.com" 
                                       style={AuthenticationStyle.textInput}
                                       onChangeText={(val)=>textInputChange(val)}
                                       onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)} />
                            {data.check_textInputChange ?
                            <Feather name="check-circle" color="#77BC7E" size={20} />
                            : null}
                        </View>
                        {/*email address error message*/}
                        {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={AuthenticationStyle.errorMsg}>You must enter a valid email address</Text>
                        </Animatable.View>
                        }

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
                        {/*password error message*/}
                        {data.isValidPassword ? null :
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={AuthenticationStyle.errorMsg}>You must enter a valid password</Text>
                            </Animatable.View>
                        }
                        


                        {/*forget password*/}
                        <View style={AuthenticationStyle.forgotWrap}>
                            <TouchableOpacity>
                                <Text style={AuthenticationStyle.forgotText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        {/*Log in button*/}
                        <TouchableOpacity>
                            <View style={AuthenticationStyle.loginBtn}>
                                <Text style={AuthenticationStyle.loginText}>LOG IN</Text>
                            </View>
                        </TouchableOpacity>
                        {/*or log in with*/}
                        <View style={AuthenticationStyle.orWrap}>
                            <View style={AuthenticationStyle.line1}></View>
                            <Text style={AuthenticationStyle.orText}>&nbsp;OR LOG IN WITH&nbsp;</Text>
                            <View style={AuthenticationStyle.line2}></View>
                        </View>
                        {/*facebook and google*/}
                        <View style={AuthenticationStyle.authenticationWrap}>
                            <TouchableOpacity>
                                <View style={AuthenticationStyle.fbBtn}>
                                    <FontAwesome name="facebook-f" color="#4267B2" size={30}></FontAwesome>
                                </View>
                            </TouchableOpacity>
                             <TouchableOpacity>
                                <View style={AuthenticationStyle.googleBtn}>
                                    <AntDesign name="google" color="#DB4437" size={30}></AntDesign>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/*Don' have an account? Create an account!*/}     
                        <View style={AuthenticationStyle.noAccountWrap}>
                            <Text style={AuthenticationStyle.noAccountText}>Don't have an account?&nbsp;</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                                <Text style={AuthenticationStyle.noAccountLink}>Create an account!</Text>
                            </TouchableOpacity>
                        </View>               
                    </View>
               </ScrollView>
           </SafeAreaView>
        );
 
  

}

