import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 10 }}  >
                <Text style={{fontSize: 20, marginRight: 5, color: COLORS.grey, fontWeight: '600'}} >Bio</Text>
                <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
                <TouchableOpacity>
                    <FontAwesome name='edit' size={30}  style={{marginLeft: 5, color: COLORS.grey}} />
                </TouchableOpacity>
            </View>
            <View>
                <Text></Text>
            </View>
    </View>
  );
}
