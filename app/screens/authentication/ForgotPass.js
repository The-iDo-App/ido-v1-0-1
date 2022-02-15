import ResetPassword from "../../components/ResetPassword";
import { SafeAreaView } from "react-native-safe-area-context";
import React,{useState, useEffect} from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from '../../components/Toast';

export default function ForgotPassScreen({navigation}) {
    const DEVURL = "http://192.168.0.111:5000";
    const [sendTo,setSendTo] = useState(null);
  
    const [message,setMessage] = useState("Security code sent!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    const hasUnsavedChanges = Boolean(true);
        React.useEffect(
            () =>
            navigation.addListener('beforeRemove', (e) => {
                e.preventDefault();
        }),[navigation, hasUnsavedChanges]
    );
    
    const fetchEmail = async() =>{
      return new Promise(async(resolve, reject) =>{
            let user = await axios.post(`${DEVURL}/api/logins/otp`, {email:sendTo});
            if(user) 
                resolve(user.data);
            reject(false);
      });
    } 

    const fetchSecurity = async()=>{
      return new Promise(async(resolve, reject) =>{
      let securityCode = await axios.post(`${DEVURL}/api/emails/otp`, {sendTo});
      if(securityCode) 
          resolve(securityCode.data);
      reject(false);
      });
    }

    const submitEmail = async() => {
        let user;
        try{
          user = await fetchEmail();
        }catch(reject){
            user = reject;
        }

        const existing = user.username || null;

        // USER EXISTING SEND SECURITY CODE
        let securityCode;
        if(existing){
          try{
            securityCode = await fetchSecurity();
            console.log(securityCode);
            await AsyncStorage.setItem("securityCode",securityCode.securityCode.toString());
            await AsyncStorage.setItem("devmail",securityCode.devmail.toString());
            await AsyncStorage.setItem("forgotEmail",existing);
            setMessage("Security code sent!");
            navigation.navigate('OTP');
          }catch(reject){
              securityCode = reject;
              await AsyncStorage.removeItem("securityCode");
          }
        }else{
          setMessage("Email does not exist!");
          await AsyncStorage.removeItem("securityCode");
        }
        setvisibleToast(true);
    }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}} >
        <Snackbar message={message} visibleToast={visibleToast}/>
        <ResetPassword 
            icon={'envelope'}
            text={'Email address'}
            pageTitle={'reset password'.toUpperCase()}
            pageDescription={'We just need your registered email address to send you 6-digit OTP so you can change your password'}
            buttonText={'send email'.toUpperCase()}
            onPressed={submitEmail}
            onChangeText={(e)=> setSendTo(e)}
         />
    </SafeAreaView>
  );
}
