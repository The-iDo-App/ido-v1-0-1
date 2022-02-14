import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadProfile from '../../components/UploadProfilePic';
import { ScrollView } from 'react-native-gesture-handler';
import BioComponent from '../../components/Bio';
import InterestChips from '../../components/interestChips';
import AboutMe from '../../components/AboutMe';
import MyAnswers from '../../components/EvaluationMyselfChips';

const {width} = Dimensions.get('window');

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
      <HeaderWrapper />
      <ScrollView >
        <View style={{marginVertical: 20}} >
             {/*profile photo, name and city*/}
            <View style={style.contentWrapper} >
                <View style={style.profilePhotoWrapper}  >
                    <UploadProfile />
                </View>
                <View style={style.nameWrapper} >
                    <Text style={style.nameText}>Coeli</Text>
                    <Text style={style.cityText}>Quezon City</Text>
                </View>
            </View>
            <BioComponent />
            <AboutMe />
            <InterestChips />
            <MyAnswers onPress={() => navigation.navigate} />
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
    nameText:{
      fontSize: 30, 
      color: COLORS.blue, 
      fontWeight: '700'
    },
    cityText:{
      fontSize: 16, 
      color: COLORS.grey
    }

});