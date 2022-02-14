import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}  >
                <Text style={{height: 1, backgroundColor: COLORS.grey, flex: 1 }} >Bio</Text>
                <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1 }} />
            </View>
    </View>
  );
}
