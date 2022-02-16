import React,{useContext} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsAndConditions() {
  return (
     <>
     <HeaderWrapper />
      <SafeAreaView style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>TermsAndConditions</Text>
           <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
