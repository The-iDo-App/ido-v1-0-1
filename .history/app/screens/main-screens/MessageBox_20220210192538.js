import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MessageBox({navigation}) {
  return (
    <>
        <HeaderWrapper />
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Chatbox</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}  >
                  <Text>Go Back</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
  );
}
