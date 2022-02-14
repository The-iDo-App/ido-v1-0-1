import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function IdoChip({text, isProfile}) {

  return (
    <View style={{margin: 2, paddingHorizontal: 12, paddingVertical: 10, backgroundColor: isProfile ? 'white' : COLORS.darkPink, borderRadius: 20, borderColor:isProfile ? COLORS.grey : COLORS.darkPink, borderWidth: 1, borderStyle: 'solid' }}  >
      <Text  style={{color: isProfile ? COLORS.grey : COLORS.white, paddingHorizontal: 2, fontSize: 16}}  >{text}</Text>
     </View>
  );
}