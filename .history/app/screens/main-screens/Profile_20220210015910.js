import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadProfile from '../../components/UploadProfilePic';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
      <HeaderWrapper />
      <ScrollView  >
       <UploadProfile />
      </ScrollView>
     </SafeAreaView>
  );
}
