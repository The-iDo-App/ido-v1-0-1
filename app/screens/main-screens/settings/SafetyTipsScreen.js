import React,{useContext} from 'react';
import { View, Text,TouchableOpacity, Pressable} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesome,} from '@expo/vector-icons';
import ParagraphComponent from '../../../components/Paragraph';
import SettingsMainTitle from '../../../components/settingsTitle';
import SettingsSubTitle from '../../../components/settingsSubTitle';
import Bulleted from '../../../components/UnorderedList';
import SafetyTips1 from '../../../models/safetyTips1';
import safetyTips2 from '../../../models/safetyTips2';
import CONTACT from '../../../models/contact';
import SafetyBullets from '../../../models/safetyTipsBullet';


export default function SafetyTipsScreen({navigation}) {
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
       <ScrollView >
          <SafeAreaView  style={{marginBottom: 20}}>
          {/*MAIN*/}
          <SettingsMainTitle title="Safety Tips Everyone"  des={null}/>
          {/*Safety Tips Part 1*/}
         
          <SettingsSubTitle title={SafetyTips1.safetyTitle1} subTitle={false} des={null} />
          <SettingsSubTitle title={SafetyTips1.safetySubTitle1} subTitle={true} des={null} />
          <ParagraphComponent paragraph={SafetyTips1.safetySubDescription1}  />
          <SettingsSubTitle title={SafetyTips1.safetySubTitle2} subTitle={true} des={null} />
          <ParagraphComponent paragraph={SafetyTips1.safetySubDescription2}  />
          <SettingsSubTitle title={SafetyTips1.safetySubTitle3} subTitle={true} des={null} />
          <ParagraphComponent paragraph={SafetyTips1.safetySubDescription3}  />
          <SettingsSubTitle title={SafetyTips1.safetySubTitle4} subTitle={true} des={null} />
          <ParagraphComponent paragraph={SafetyTips1.safetySubDescription4}  />
          <SettingsSubTitle title={SafetyTips1.safetySubTitle5} subTitle={true} des={null} />
          {
            SafetyBullets.map((bul, i) => (
              <React.Fragment key={i} >
                <Bulleted text={bul.bullet} />
              </React.Fragment>
            ))
          }
          <SettingsSubTitle title={SafetyTips1.safetySubTitle6} subTitle={true} des={null} />
          <ParagraphComponent paragraph={SafetyTips1.safetySubDescription6}  />

          {/*Safety Tips Part 2*/}
          {
            safetyTips2.map((tip, j) => (
              <React.Fragment key={j} >
                <SettingsMainTitle title={tip.safetyTitle} des={null} />
                {
                  tip.tips.map((item, k) => (
                    <React.Fragment key={k}  >
                      <SettingsSubTitle title={item.safetySubTitle} subTitle={true} des={null} />
                      <ParagraphComponent paragraph={item.safetySubDescription} />
                    </React.Fragment>
                  ))
                }
              </React.Fragment>
            ))
          }
          {
            CONTACT.map((contact, num) => (
              <React.Fragment key={num}  >
                <View  style={{display: 'flex', paddingHorizontal: 20, marginVertical: 10}}  >
                    <Text style={{color: COLORS.grey, fontWeight: '700'}} >{contact.contactName}</Text>
                    <Text style={{display: contact.contactSubName === null ? 'none' : 'flex', color: COLORS.grey}} >{contact.contactSubName}</Text>
                    <Text  style={{color: COLORS.grey}} >{contact.contactNum}</Text>
                </View>
              </React.Fragment>
            ))
          }

          </SafeAreaView>
       </ScrollView>
     </View>
      
    </>
  );
}
