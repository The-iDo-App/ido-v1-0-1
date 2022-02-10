import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MessageBox({navigation}) {
  return (
    <View>
        <Text>MessageBox</Text>
        <TouchableOpacity onPress={}  >
           <Text>GoBack</Text>
        </TouchableOpacity>
     </View>
  );
}
