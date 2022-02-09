import React from 'react';
import { View, Text } from 'react-native';

export default function IdoChip({text}) {

  return (
    <View style={{margin: 2, padding: 10}}  >
      <Text>{text}</Text>
     </View>
  );
}
