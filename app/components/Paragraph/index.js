import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function ParagraphComponent({paragraph}) {
  return (
    <View style={{display: 'flex', paddingHorizontal: 20}}  >
      <Text style={{fontSize: 12, color: COLORS.grey, marginBottom: 20}}  >{paragraph}</Text>
     </View>
  );
}
