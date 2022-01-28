import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import DatingCard from '../../components/DatingCard';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}} >
      <HeaderWrapper />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white}}>
      
        <DatingCard />
      </View>
    </SafeAreaView>
    
  );
}
