import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';

export default function SettingsSubTitle({title, des, subTitle}) {
  return (
    <View  style={{display: 'flex', paddingHorizontal: 20}} >
        <Text style={{fontSize: subTitle ? 18 : 20, color: COLORS.blue, fontWeight:  subTitle ? '600' : '700'}} >{title}</Text>
        {/*Main Paragraph*/}
        <View>
            <Text style={{fontSize: 12, color: COLORS.blue, fontWeight: '600', fontStyle: 'italic', marginTop: des === null ? 0 :  10, marginBottom: des === null ? 0 : 10}} >{des}</Text>
        </View>
     </View>
  );
}
