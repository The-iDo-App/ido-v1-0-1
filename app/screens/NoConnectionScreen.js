import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWrapper from '../components/Header';
import {MaterialIcons} from '@expo/vector-icons';
import COLORS from '../src/consts/color';

const {width} = Dimensions.get('window');

export default function ErrorScreen() {
  return (
    <>
      <HeaderWrapper />
       <SafeAreaView style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}} >
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: width -50}} >
          <MaterialIcons name='no-cell' size={100}  color={COLORS.darkPink}  />
          <Text style={{fontSize: 18, marginTop: 10, textAlign: 'center', color: COLORS.grey}} >It looks like your internet is turned off. Please Check your internet connection.</Text>
        </View>
      </SafeAreaView>
    </>
   
  );
}
