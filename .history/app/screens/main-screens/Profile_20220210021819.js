import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadProfile from '../../components/UploadProfilePic';
import { ScrollView } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function Profile() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
      <HeaderWrapper />
      <ScrollView >
       <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: width/1.25, marginHorizontal: 0}} >
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginHorizontal: 10}}  >
               <UploadProfile />
          </View>
         
          <View style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }} >
              <Text style={{fontSize: 30, color: COLORS.blue, fontWeight: '700'}}>Coeli</Text>
              <Text style={{fontSize: 16, color: COLORS.grey}}>Quezon City</Text>
          </View>
          
       </View>
         
      </ScrollView>
     </SafeAreaView>
  );
}
