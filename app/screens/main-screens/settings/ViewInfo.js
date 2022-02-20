import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import COLORS from '../../../src/consts/color';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../../components/context';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsMainTitle from '../../../components/settingsTitle';
import InfoComponent from '../../../components/InfoComponent';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';

export default function ViewInfo({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(async () => {
    let id = await AsyncStorage.getItem('userId');
    let accessToken = await AsyncStorage.getItem('access_token');

    let res = await axios.post(
      `${BACKEND_BASEURL}/api/profiles/`,
      { userId: id },
      {
        headers: { authorization: accessToken },
      }
    );
    setName(res.data.user.firstName + ' ' + res.data.user.lastName);
    setEmail(res.data.user.email);
  }, []);

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
            <SettingsMainTitle title="Personal Information" des={null} />
            <InfoComponent name={name} email={email} />
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
}
