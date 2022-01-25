import ResetPassword from "../../components/ResetPassword";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import COLORS from "../../src/consts/color";


export default function OTPScreen({navigation}) {


    const submitOTP = () => {
        // if(otp is not match with sent otp || timer runs out){
        //     error message
        //     Resend link will be enable 
        // }
        navigation.navigate('ChangePass');
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
         <Text style={{textAlign: 'center', color: COLORS.darkPink, fontSize: 16}}  >Resend in 100s</Text>
    </SafeAreaView>
  );
}

//TODO: Resend in {timer}
//TODO: match the current validation with entered validation