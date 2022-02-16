import React from 'react';
import { View, Text } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import COLORS from '../../src/consts/color';

export default function Bulleted({text}) {
  return (
    <View style={{display: 'flex', paddingHorizontal: 40}} >
        <Unorderedlist  ><Text style={{fontSize: 12, color: COLORS.grey,  marginBottom: 10}}    >{text}</Text></Unorderedlist>
     </View>
  );
}
