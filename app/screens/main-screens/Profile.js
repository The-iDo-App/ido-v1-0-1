import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function Profile() {
  return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white}}>
      <Text>Profile</Text>
     </View>
  );
}
