import React from 'react';
import { View, Text } from 'react-native';

export default function BioComponent() {
  return (
    <View>
      <Text numberOfLines={2} ellipsizeMode='tail'>
  long string
</Text>
     </View>
  );
}
