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
      <ScrollView >
       <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', width: '100%'}} >
          <UploadProfile />
          <View style={{display: 'flex'}} >
              <Text style={{fontSize: 30, color: COLORS.blue, fontWeight: '700'}}>Coeli</Text>
              <Text style={{fontSize: 16, color: COLORS.grey}}>Quezon City</Text>
          </View>
          
       </View>
         
      </ScrollView>
     </SafeAreaView>
  );
}
