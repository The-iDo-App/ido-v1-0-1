import React from 'react';
import { View, Text } from 'react-native';

export default function IdoChip({text} , id) {
    const {key} = props.key;
  return (
    <View key={key}>
      <Text>{text}</Text>
     </View>
  );
}
