import React,{useContext} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsAndConditions() {
  return (
    <View>
      <Text>Terms and Conditions</Text>
     </View>
  );
}
