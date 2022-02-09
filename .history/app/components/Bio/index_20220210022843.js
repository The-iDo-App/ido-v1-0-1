import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <View>
            <View>
                <Text>Bio</Text>
                <View style={{height: 1, }} />
            </View>
    </View>
  );
}
