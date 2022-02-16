import React,{useContext} from 'react';
import { View, Text,TouchableOpacity, Presable, Pressable} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome,} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ParagraphComponent from '../../../components/Paragraph';
import SettingsMainTitle from '../../../components/settingsTitle';
import SettingsSubTitle from '../../../components/settingsSubTitle';
import AboutLists from '../../../models/abouts';


export default function AboutScreen({navigation}) {
  return (
     <>
    <View  style={{backgroundColor: 'white'}}>
        <HeaderWrapper />
        <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 20, marginTop: 10}} >
              <Pressable  onPress={()=>navigation.goBack()} style={{paddingHorizontal: 10, paddingVertical: 10}} >
                  <FontAwesome  name='angle-left' size={30} style={{color: COLORS.grey}} />
              </Pressable>
        </View>
     </View>
     <View style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <ScrollView>
            <SafeAreaView style={{marginBottom: 20}}  >
                <SettingsMainTitle  title={AboutLists.aboutTitle} des={AboutLists.about}  />
                <SettingsSubTitle title={AboutLists.title1} des={null} />
                <ParagraphComponent paragraph={AboutLists.description1} />
                <SettingsSubTitle title={AboutLists.title2} des={null} />
                <ParagraphComponent paragraph={AboutLists.description2} />
                <SettingsSubTitle title={AboutLists.title3} des={null} />
                <ParagraphComponent paragraph={AboutLists.description3} />
            </SafeAreaView>
        </ScrollView>
     </View>
      
    </>
  );
}
