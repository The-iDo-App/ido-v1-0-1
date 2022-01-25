import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';

export default function ChangePassScreen() {
  return (
    <SafeAreaView>
        <HeaderWrapper />
        <Title Title={'CHANGE PASSWORD'} Description={'Please enter your new password'}/>
    </SafeAreaView>
  );
}
