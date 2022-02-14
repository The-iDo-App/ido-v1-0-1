import ResetPassword from "../../components/ResetPassword";
import { View, Text, Touchable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React , {useEffect, useState} from "react";
import COLORS from "../../src/consts/color";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function OTPScreen({navigation}) {

    const [counter, setCounter] = useState(100);
    const [activeCounter, setActiveCounter] = useState(false);


    
    // activate otp timer
    useEffect(() => {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    });


    const submitOTP = () => {
        // if(otp is not match with sent otp || timer runs out){
        //     error message
        //     Resend link will be enable 
        // }
        navigation.navigate('ChangePass');
    }
   
    const resendOTP = () => {
        // send email again
        setCounter(100)
    }

    

  return (
    <SafeAreaView style={{justifyContent: 'center'}}>
        <ResetPassword 
            icon={'lock'}
            text={'Enter 6-digit OTP'}
            pageTitle={'otp verification'.toUpperCase()}
            pageDescription={'Enter the OTP sent to example@email.com'}
            buttonText={'submit'.toUpperCase()}
            maxLength={6}
            onPressed={submitOTP}
         />
         <Text style={{textAlign: 'center', color: COLORS.darkPink, fontSize: 18}}  >Resend OTP in {counter}s</Text>
         <TouchableOpacity disabled={counter != 0} onPress={resendOTP} style={{marginVertical: 40}} >
           <Text style={{textAlign: 'center', color: COLORS.blue, fontSize: 18, textDecorationLine: counter != 0 ? 'none' : 'underline', opacity: counter != 0 ? 0.5 : 1, fontWeight: '600' }}  >RESEND OTP</Text>
         </TouchableOpacity>
    </SafeAreaView>
  );
}


//TODO: match the current validation with entered validation