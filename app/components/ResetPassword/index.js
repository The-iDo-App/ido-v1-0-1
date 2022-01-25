import React from 'react';
import { View, Text, Dimensions, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import COLORS from '../../src/consts/color';
import { TouchableOpacity } from 'react-native-gesture-handler';


const {width, height, scale} = Dimensions.get('window');


export default function ResetPassword({maxLength, onChangeText, pageTitle, pageDescription, onPressed, buttonText, icon, text}) {
  return (
    <View style={STYLES.wrapper} >
        <FontAwesome name='lock' size={scale*50} color={COLORS.darkPink}  />
        <Text style={STYLES.pageTitle}>{pageTitle}</Text>
        <Text style={STYLES.pageDescription}>{pageDescription}</Text>
        <View style={{width: width-40, justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
            <View style={STYLES.emailField} >
              <FontAwesome name={icon} color="#8999a8" size={20} />
              <TextInput 
                  placeholder={text} 
                  placeholderTextColor={COLORS.grey} 
                  style={STYLES.emailTextField} 
                  onChangeText={onChangeText}
                  maxLength={maxLength}
                  />
            </View>
        </View>
        <TouchableOpacity  onPress={onPressed}>
          <View style={STYLES.submitEmailBtn}>
            <Text style={STYLES.submitEmailTxt}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
         
     </View>
  );
}

const STYLES = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 20, 
    paddingVertical: 40,
    marginTop: 40
  },
  pageTitle: {
    color: COLORS.grey,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center'
  }, 
  pageDescription: {
    color: COLORS.grey, 
    textAlign: 'center',
    fontSize: 16,
  }, 
   emailField:{
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     borderBottomWidth: 1.5,
     borderBottomColor: COLORS.grey,
     width: width - 40, 
     padding: 10,
     marginTop: 20,
   },
   emailTextField: {
     marginLeft: 10,
     fontSize: 20,
     color: COLORS.grey
   },
   submitEmailBtn: {
        backgroundColor: COLORS.blue,
        padding: 14,
        borderRadius: width/2,
        width: width - 40, 
        height: 50, 
        alignItems: 'center', 
        marginTop: 40
   }, 
   submitEmailTxt:{
      textAlign: 'center',
        color: COLORS.white,
        fontSize: 17,
   }

});

