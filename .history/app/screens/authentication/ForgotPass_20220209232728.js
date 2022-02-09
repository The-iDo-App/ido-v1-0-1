import ResetPassword from "../../components/ResetPassword";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";


export default function ForgotPassScreen({navigation}) {


    const submitEmail = () => {
        // if(email is not existing){
        //     show error message
        // }
        navigation.navigate('OTP');
    }

  return (
    <View style={{backgroundColor: 'white'}} >
        <SafeAreaView style={{backgroundColor: 'white'}} >
          <ResetPassword 
              icon={'envelope'}
              text={'Email address'}
              pageTitle={'reset password'.toUpperCase()}
              pageDescription={'We just need your registered email address to send you 6-digit OTP so you can change your password'}
              buttonText={'send email'.toUpperCase()}
              onPressed={submitEmail}
          />
      </SafeAreaView>
    </View>
    
  );
}
