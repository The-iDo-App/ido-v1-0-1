import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import { createStackNavigator } from '@react-navigation/stack';
import MessageInbox from './MessageInbox';
import MessageBox from './MessageBox';

const Stack = createStackNavigator();

export default function MessageTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MessageInbox"
        options={{ header: () => null }}
        component={MessageInbox}
      />
      <Stack.Screen
        name="MessageBox"
        options={{ header: () => null }}
        component={MessageBox}
      />
    </Stack.Navigator>
  );
}
