//import liraries
import React, { useState,useEffect, useRef } from 'react';
import { View, Text, Dimensions,Button, TextInput, Image, BackHandler} from 'react-native';
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
import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const  {width, height, scale, fontScale} = Dimensions.get("window");

// create a component
const CreateAccount = ({navigation}) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [sex, setSex] = useState("woman");

    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
    }, [])

    const handleSubmit = async()=>{
        if(firstName && lastName && username && birthday && sex){
            setMessage("Input successfully saved!");
            await AsyncStorage.setItem('firstName', firstName);
            await AsyncStorage.setItem('lastName', lastName);
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('birthday', birthday);
            await AsyncStorage.setItem('sex', sex);
            // console.log(firstName,lastName,username,birthday,gender);
            navigation.navigate('Sexuality')
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        // navigation.navigate('Sexuality');
    }


    return (
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
                <HeaderWrapper />
                <ScrollView>
                    <Title Title="Create an account!" Description="Fill in the blanks. Upload your best photo or choose a best avatar"/>
                    <Snackbar message={message} visibleToast={visibleToast}/>
                    <UploadImage />
                    <View style={Register.formWrapper}>
                                    <View style={Register.labelWrapper}>
                                        <Text style={Register.labelText}>My name is</Text>
                                    </View>
                                    <View style={Register.inputWrapper}>
                                        <View style={Register.nameWrapper}>
                                            <View style={Register.inputTextWrapper}>
                                                <TextInput placeholder="John" autoCapitalize="words" placeholderTextColor={COLORS.grey}  style={Register.inputText} onChangeText={(text)=>setFirstName(text)}/>
                                            </View>
                                            <Text style={Register.underText}>First name</Text>
                                        </View>
                                        <View style={Register.nameWrapper}>
                                            <View style={Register.inputTextWrapper}>
                                                <TextInput placeholder="Doe" autoCapitalize="words" placeholderTextColor={COLORS.grey}  style={Register.inputText} onChangeText={(text)=>setLastName(text)}/>
                                            </View>
                                            <Text style={Register.underText}>Last name</Text>
                                        </View>
                                    </View>

                                    <View style={Register.labelWrapper}>
                                        <Text style={Register.labelText}>You can call me</Text>
                                    </View>
                            
                                    <View style={{marginTop: 10, marginBottom: 20}}>
                                        <View style={{width: width-50, borderBottomColor: COLORS.grey, borderBottomWidth: 0.5}}>
                                            <TextInput textContent="nickname" placeholder="JD" placeholderTextColor={COLORS.grey}  style={{fontSize: 18, color: COLORS.grey}} autoCapitalize="words"
                                             onChangeText={(text)=>setUsername(text)}/>
                                        </View>
                                        <Text style={Register.underText}>Nickname</Text>
                                    </View>
                    </View>
                    <BirthDatePicker dateValue={(value) => setBirthday(value)}/>
                    <View style={{marginVertical: 10}} />
                    <GenderBio genderValue={(value)=> setSex(value)}/>
                     <View style={{marginVertical: 20}} />
                        <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => {
                            handleSubmit();
                        }} />
                     <View style={{marginVertical: 20}} />
                </ScrollView>
                
            </SafeAreaView>
      
       
    );
};



//make this component available to the app
export default CreateAccount;
