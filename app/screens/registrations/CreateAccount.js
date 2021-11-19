//import liraries
import React, { useState } from 'react';
import { View, Text, Dimensions ,  TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//components
import BirthDatePicker from '../../components/BirthDatePicker';
import UploadImage from '../../components/UploadImageAvatar';
import NextButton from '../../components/NextButton';
import GenderBio from '../../components/GenderBio';
import Title from '../../components/Title';
import HeaderWrapper from '../../components/Header';
import COLORS from '../../src/consts/color';
import Register from '../../src/styles/screens/registration';
import { ScrollView } from 'react-native-gesture-handler';


const  {width, height, scale, fontScale} = Dimensions.get("window");


// create a component
const CreateAccount = ({navigation}) => {
    



    return (
       
            
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
                <HeaderWrapper />
                <ScrollView>

                    <Title Title="Create an account!" Description="Fill in the blanks. Upload your best photo or choose a best avatar"/>
                    <UploadImage />
                    <View style={Register.formWrapper}>
                                    <View style={Register.labelWrapper}>
                                        <Text style={Register.labelText}>My name is</Text>
                                    </View>
                                    <View style={Register.inputWrapper}>
                                        <View style={Register.nameWrapper}>
                                            <View style={Register.inputTextWrapper}>
                                                <TextInput placeholder="John" autoCapitalize="words" placeholderTextColor={COLORS.grey}  style={Register.inputText} />
                                            </View>
                                            <Text style={Register.underText}>First name</Text>
                                        </View>
                                        <View style={Register.nameWrapper}>
                                            <View style={Register.inputTextWrapper}>
                                                <TextInput placeholder="Doe" autoCapitalize="words" placeholderTextColor={COLORS.grey}  style={Register.inputText}/>
                                            </View>
                                            <Text style={Register.underText}>Last name</Text>
                                        </View>
                                    </View>

                                    <View style={Register.labelWrapper}>
                                        <Text style={Register.labelText}>You can call me</Text>
                                    </View>
                            
                                    <View style={{marginTop: 10, marginBottom: 20}}>
                                        <View style={{width: width-50, borderBottomColor: COLORS.grey, borderBottomWidth: 0.5}}>
                                            <TextInput textContent="nickname" placeholder="JD" placeholderTextColor={COLORS.grey}  style={{fontSize: 18, color: COLORS.grey}} autoCapitalize="words"/>
                                        </View>
                                        <Text style={Register.underText}>Nickname</Text>
                                    </View>
                    </View>
                    <BirthDatePicker />
                    <View style={{marginVertical: 10}} />
                    <GenderBio />
                     <View style={{marginVertical: 20}} />
                    <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => navigation.navigate('Sexuality')} />
                     <View style={{marginVertical: 20}} />
                </ScrollView>
                
            </SafeAreaView>
      
       
    );
};



//make this component available to the app
export default CreateAccount;
