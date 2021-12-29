import React from 'react';
import { StatusBar } from 'react-native';
import Stacks from './app/stack';

import Onboarding from './app/screens/Onboarding';
import QuestionInterest from './app/components/QuestionInterest';
import Preference from './app/screens/preferences/Preference';
import {LogBox } from 'react-native';
import DescribeMe from './app/components/DescribeMe';
import HeaderWrapper from './app/components/Header';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <>
      <StatusBar />
      <Stacks />
    </>
  );
}

//TODO: insert snackbar messages indicating success or failed process
//TODO: insert activity indicator to registration, preferences, interests, authetnication