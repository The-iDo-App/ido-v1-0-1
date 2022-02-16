import React,{useContext} from 'react';
import { View, Text,TouchableOpacity, Pressable} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import {FontAwesome,} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import PrivacyGuidelines from '../../../models/privacy';
import ParagraphComponent from '../../../components/Paragraph';
import SettingsMainTitle from '../../../components/settingsTitle';
import SettingsSubTitle from '../../../components/settingsSubTitle';
import PrivacyBullet from '../../../models/privacyBullet';
import Bulleted from '../../../components/UnorderedList';

export default function GuidelinesScreen({navigation}) {
  return (
     <>
     <View  style={{backgroundColor: 'white'}}>
        <HeaderWrapper />
        <View style={{display: 'flex', flexDirection: 'row',marginHorizontal: 20, marginTop: 10}} >
              <Pressable  onPress={()=>navigation.goBack()} style={{paddingHorizontal: 10, paddingVertical: 10}} >
                  <FontAwesome  name='angle-left' size={30} style={{color: COLORS.grey}} />
              </Pressable>
        </View>
     </View>
     
      <View style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <ScrollView >
             <SafeAreaView style={{marginBottom: 20}} >
                   {/*Main */}
                  <SettingsMainTitle  title={PrivacyGuidelines.privacyTitle} des={PrivacyGuidelines.priDes} />
                  <View style={{marginTop: 5}}>
                        {/*Subtitle 1 */}
                    <SettingsSubTitle title={PrivacyGuidelines.subtitle1} des={PrivacyGuidelines.priDesMain1}    />
                      <View   >
                          <Bulleted text={PrivacyGuidelines.priDesDes1a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes2a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes3a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes4a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes5a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes6a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes7a} />
                          <Bulleted text={PrivacyGuidelines.priDesDes8a} />
                      </View> 
                  </View>
                  <View style={{marginTop: 5}}>
                         {/*Subtitle 2 */}
                      <SettingsSubTitle title={PrivacyGuidelines.subtitle2} des={null}  />
                      <ParagraphComponent paragraph={PrivacyGuidelines.priDesMainParagraph1} />
                      <ParagraphComponent paragraph={PrivacyGuidelines.priDesMainParagraph2}  />
                      <ParagraphComponent paragraph={PrivacyGuidelines.priDesMainParagraph3}  />
                  </View>
                  <View style={{marginTop: 5}}>
                       {/*Subtitle 3 */}
                      <SettingsSubTitle title={PrivacyGuidelines.subtitle3} des={PrivacyGuidelines.priDesMain2}  />
                  </View>
                  <View style={{marginTop: 5}}>
                      {/*Subtitle 4 */}
                      <SettingsSubTitle title={PrivacyGuidelines.subtitle4} des={PrivacyGuidelines.priDesMain3}  />
                  </View>
                  <View style={{marginTop: 5}}>
                       {/*Subtitle 5 */}
                      <SettingsSubTitle title={PrivacyGuidelines.subtitle5} des={null} />
                      {
                        PrivacyBullet.map((item, i) => (
                          <React.Fragment key={i}>
                              <Bulleted text={item.bullet} />
                          </React.Fragment>
                        ))
                      }
                  </View>
                  <View style={{marginTop: 5}}>
                     {/*Subtitle 6 */}
                    <SettingsSubTitle title={PrivacyGuidelines.subtitle6} des={PrivacyGuidelines.priDesMain4}  />
                  </View>
                  <View style={{marginTop: 5}}>
                       {/*Subtitle 7 */}
                  <SettingsSubTitle title={PrivacyGuidelines.subtitle7} des={PrivacyGuidelines.priDesMain5}  />
                  </View>

                  

                  
            </SafeAreaView>
        </ScrollView>
       
      </View>
    </>
  );
}
