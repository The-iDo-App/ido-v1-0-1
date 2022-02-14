import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <View>
            <View style={{flex: 1}}  >
                <Text >Bio</Text>
                <View style={{height: 1, backgroundColor: COLORS.grey, }} />
            </View>
    </View>
  );
}
