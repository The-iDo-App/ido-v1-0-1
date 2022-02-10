import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MessageInbox({Navigation}) {
  return (
    <>
        <HeaderWrapper />
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Inbox</Text>
              <TouchableOpacity   >
                  <Text>Chatbox</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
    
  );
}
