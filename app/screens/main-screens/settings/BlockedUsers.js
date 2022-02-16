import React,{useContext} from 'react';
import { View, Text,TouchableOpacity, Pressable} from 'react-native';
import COLORS from '../../../src/consts/color';
import {FontAwesome,} from '@expo/vector-icons';
import { AuthContext } from '../../../components/context';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsMainTitle from '../../../components/settingsTitle';
import BlockedUserComponent from '../../../components/BlockedUser';


export default function BlockedUsersScreen({navigation}) {
  return (
     <>
      <View  style={{backgroundColor: 'white'}}>
        <HeaderWrapper />
        <View style={{display: 'flex', flexDirection: 'row', marginHorizontal: 20, marginTop: 10, }} >
              <Pressable  onPress={()=>navigation.goBack()} style={{paddingHorizontal: 10, paddingVertical: 10}} >
                  <FontAwesome  name='angle-left' size={30} style={{color: COLORS.grey}} />
              </Pressable>
        </View>
     </View>
     <View style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <ScrollView>
            <SafeAreaView style={{marginBottom: 20}}  >
                 <SettingsMainTitle title="Blocked Users" des={null} />
                <BlockedUserComponent image={require('../../../src/assets/daniel_padilla.jpg')} nickname="DJ" email="djp@gmail.com" onPress={() => console.log('unblocked')} />
            </SafeAreaView>
        </ScrollView>
     </View>
    </>
  );
}
