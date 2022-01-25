import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import COLORS from '../../src/consts/color';
import BackSkip from '../../components/BackSkip';
import HeaderWrapper from '../../components/Header';
import QuestionInterest from '../../components/QuestionInterest';
import Title from '../../components/Title';
import { ScrollView } from 'react-native-gesture-handler';

export default function Question({navigation}) {

  const hasUnsavedChanges = Boolean(true);
  React.useEffect(
      () =>
      navigation.addListener('beforeRemove', (e) => {
          e.preventDefault();
      }),
      [navigation, hasUnsavedChanges]
  );
  
  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.white}}  >
          <HeaderWrapper />
            <Title Title="Which one are you?" Description="Choose only one each question." />
            <QuestionInterest/>

    </SafeAreaView>
  );
}
