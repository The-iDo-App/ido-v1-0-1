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
import TERMS from '../../../models/terms';

export default function TermsAndConditions({navigation}) {

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
              <SettingsMainTitle title="Terms and Conditions" des={null}/>
                {
                  TERMS.map((term, i) => (
                    <React.Fragment key={i}>
                        <SettingsSubTitle title={term.title} des={term.mainParagraph} />
                        <ParagraphComponent paragraph={term.paragraphs} />
                        {
                          term.bullets.map((bulleted, j) => (
                            <React.Fragment key={j} >
                              <View style={{marginVertical: 10}}>
                                  <View style={{display: 'flex', paddingHorizontal: 30}} >
                                      <Text style={{fontSize: 14, color: COLORS.grey, fontWeight: '700', marginVertical: 10}} >{bulleted.title}</Text>
                                  </View>
                                      {
                                        bulleted.items.map((item, ind) => (
                                          <React.Fragment  key={ind}>
                                              <Bulleted text={item} />
                                          </React.Fragment>
                                        ))
                                      }
                                      
                              </View>
                                
                               
                            </React.Fragment>
                          ))
                        }
                        {
                          term.subs.map((sub, j) => (
                            <React.Fragment key={j} >
                              <SettingsSubTitle subTitle={true} title={sub.title} des={sub.mainContent} />
                              <ParagraphComponent paragraph={sub.contents} />
                            </React.Fragment>
                          ))
                        }
                       
                    </React.Fragment>
                  ))
                }
            </SafeAreaView>
        </ScrollView>
     </View>
    </>
  );
}
