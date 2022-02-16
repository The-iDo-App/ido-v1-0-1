import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function IdoChip({text}) {

  return (
    <View style={{margin: 2, padding: 12, backgroundColor: COLORS.darkPink, borderRadius: 20 }}  >
      <Text  style={{color: COLORS.white}}  >{text}</Text>
     </View>
  );
}
