import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MessageBox({navigation}) {
  return (
    <>
        <HeaderWrapper />
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>Inbox</Text>
              <TouchableOpacity onPress={() => navigation.navigate('MessageInbox')}  >
                  <Text>Chatbox</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    </>
  );
}
