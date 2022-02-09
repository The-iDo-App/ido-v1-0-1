import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}  >
                <Text  >Bio</Text>
                <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1 }} />
                <FontAwesome />
            </View>
    </View>
  );
}
