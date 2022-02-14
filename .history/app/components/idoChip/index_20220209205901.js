import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function IdoChip({text, isProfile}) {

  return (
    <View style={{margin: 2, padding: 12, backgroundColor: isProfile ? 'white' : COLORS.darkPink, borderRadius: 20, borderColor:isProfile ? COLORS.grey : COLORS.darkPink, borderWidth: 1, borderStyle: 'solid' }}  >
      <Text  style={{color: isProfile ? COLORS.grey : COLORS.white, marginHorizontal: 2}}  >{text}</Text>
     </View>
  );
}
