import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MessageBox() {
  return (
    <View>
        <Text>MessageBox</Text>
        <TouchableOpacity>
           <Text>GoBac</Text>
        </TouchableOpacity>
     </View>
  );
}
