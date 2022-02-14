import React from 'react';
import { View, Text } from 'react-native';

export default function IdoChip({text} , props) {
    const {key} = props.id;
  return (
    <View key={key}>
      <Text>{text}</Text>
     </View>
  );
}
