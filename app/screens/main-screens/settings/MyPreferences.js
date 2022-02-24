import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import COLORS from '../../../src/consts/color';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../../components/context';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsMainTitle from '../../../components/settingsTitle';
import UserPreferences from '../../../components/UserPreferences';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';
import NextButton from '../../../components/NextButton';

export default function MyPreferences({ navigation }) {
  const [preferences, setPreferences] = useState({});
  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <HeaderWrapper />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingHorizontal: 10, paddingVertical: 10 }}
          >
            <FontAwesome
              name="angle-left"
              size={30}
              style={{ color: COLORS.grey }}
            />
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <SafeAreaView style={{ marginBottom: 20 }}>
            <SettingsMainTitle title="My Preferences" des={null} />
            <UserPreferences report={setPreferences} />
          </SafeAreaView>
        </ScrollView>
        <NextButton
          TextButton="Save Changes"
          backgroundColor={COLORS.lightPink}
          onPress={() => console.log(preferences)}
        />
      </View>
    </>
  );
}
