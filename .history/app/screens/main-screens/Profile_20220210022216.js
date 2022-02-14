import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
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
       <View style={style.contentWrapper} >
          <View style={style.profilePhotoWrapper}  >
               <UploadProfile />
          </View>
         
          <View style={style.nameWrapper} >
              <Text style={{fontSize: 30, color: COLORS.blue, fontWeight: '700'}}>Coeli</Text>
              <Text style={{fontSize: 16, color: COLORS.grey}}>Quezon City</Text>
          </View>
          
       </View>
         
      </ScrollView>
     </SafeAreaView>
  );
}



const style = StyleSheet.create({
    contentWrapper: {
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: width/1.15,
       marginTop: 20
    },
    profilePhotoWrapper:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      marginRight: 20
    },
    nameWrapper:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
    },
    nameText:{fontSize: 30, color: COLORS.blue, fontWeight: '700'},
    cityText:{}

});