import ResetPassword from "../../components/ResetPassword";
import { View, Text, Touchable,Linking,BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React , {useEffect, useState} from "react";
import COLORS from "../../src/consts/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from '../../components/Toast';
import axios from 'axios';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';


export default function OTPScreen({navigation}) {
    const maxTimer =0;
    const [counter, setCounter] = useState(maxTimer);
    const [activeCounter, setActiveCounter] = useState(false);
    const [userOtp, setOtp] = useState(null);
    const [email,setEmail] = useState(null);
    const [message,setMessage] = useState('');
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    // activate otp timer
    useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    });

    useEffect(async() => {
       let user = await AsyncStorage.getItem('forgotEmail');
       let token = await AsyncStorage.getItem('securityCode');
       console.log(token);
       setEmail(user);
    }, [email]);

    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
      return () => backHandler.remove()
    }, [])

    const submitOTP = async() => {
        const securityCode = await AsyncStorage.getItem("securityCode");
        // console.log(securityCode,userOtp);
        if(securityCode == userOtp){
          navigation.navigate('ChangePass');  
        }else{
          setMessage("Invalid security code!");
          setvisibleToast(true);
        }
    }
   
    const fetchSecurity = async()=>{
      return new Promise(async(resolve, reject) =>{
        let securityCode;
        const sendTo = await AsyncStorage.getItem("forgotEmail");
        try{
          securityCode  = await axios.post(`${BACKEND_BASEURL}/api/emails/otp`, {sendTo});
          // console.log(securityCode);
        }catch(err){
          console.log(err);
        }
        if(securityCode) 
            resolve(securityCode.data);
        reject(false);
      });
    }

    const resendOTP = async() => {
        // send email again
        let securityCode;
        try{
          securityCode = await fetchSecurity();
          await AsyncStorage.setItem("securityCode",securityCode.securityCode.toString());
          console.log(securityCode.securityCode.toString());
          setMessage("Security code sent!");
        }catch(reject){
            securityCode = reject;
            await AsyncStorage.removeItem("securityCode");
        }
        console.log(securityCode);

        setvisibleToast(true);
        setCounter(maxTimer);
    }


  return (
    <SafeAreaView style={{justifyContent: 'flex-start', backgroundColor: 'white', flex: 1}}>
        <Snackbar message={message} visibleToast={visibleToast}/>
        <ResetPassword 
            icon={'lock'}
            text={'Enter 6-digit OTP'}
            pageTitle={'otp verification'.toUpperCase()}
            pageDescription={`Enter the OTP sent to ${email}`}
            buttonText={'submit'.toUpperCase()}
            maxLength={6}
            onPressed={submitOTP}
            onChangeText={(e) => setOtp(e)}
         />
         <Text style={{textAlign: 'center', color: COLORS.darkPink, fontSize: 18}}  >Resend OTP in {counter}s</Text>
         <TouchableOpacity disabled={counter != 0} onPress={resendOTP} style={{marginVertical: 40}} >
           <Text style={{textAlign: 'center', color: COLORS.blue, fontSize: 18, textDecorationLine: counter != 0 ? 'none' : 'underline', opacity: counter != 0 ? 0.5 : 1, fontWeight: '600' }}  >RESEND OTP</Text>
         </TouchableOpacity>
   
    </SafeAreaView>
  );
}

//TODO:: CHANGE BACKEND URL
//TODO: match the current validation with entered validation
