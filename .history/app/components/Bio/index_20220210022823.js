import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const {width} = Dimensions.get('')

export default function BioComponent() {
  return (
    <View>
            <View>
                <Text>Bio</Text>
                <View />
            </View>
    </View>
  );
}
