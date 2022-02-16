import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function IdoChip({text}) {

  return (
    <View style={{margin: 2, padding: 10, backgroundColor: COLORS.darkPink, borderRadius: 15 }}  >
      <Text>{text}</Text>
     </View>
  );
}
