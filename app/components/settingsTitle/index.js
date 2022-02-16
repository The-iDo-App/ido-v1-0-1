import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function SettingsMainTitle({title, des}) {
  return (
    <View style={{display: 'flex', paddingHorizontal: 20}}  >
        <Text style={{fontSize: 25, color: COLORS.blue, fontWeight: 'bold'}}  >{title}</Text>
        <View>
            <Text  style={{fontSize: 14, color: COLORS.blue, fontWeight: '600', fontStyle: 'italic', marginTop: des === null ? 0 :  10, marginBottom: des === null ? 0 : 20}}  >{des}</Text>
        </View>
     </View>
  );
}



