import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import COLORS from '../../../src/consts/color';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../../components/context';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsMainTitle from '../../../components/settingsTitle';
import ChangePasswordComponent from '../../../components/ChangePasswordComponent';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';
import NextButton from '../../../components/NextButton';
import Snackbar from '../../../components/Toast';

export default function ChangePassword({ navigation }) {
  const [data, setData] = useState({});
  const [isVisibleToast, setIsVisibleToast] = useState(false);
  const [message, setMessage] = useState('');

  const changePassword = async () => {
    const userId = await AsyncStorage.getItem('userId');
    const accessToken = await AsyncStorage.getItem('access_token');

    let res = await axios.put(
      `${BACKEND_BASEURL}/api/settings/change-password`,
      { ...data },
      { headers: { authorization: accessToken } }
    );

    if (res.data) {
      setMessage(res.data.message);
      setIsVisibleToast(true);
      setIsVisibleToast(false);
    }
  };

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
            <SettingsMainTitle title="Change Password" des={null} />
            <ChangePasswordComponent report={setData} />
            <Snackbar message={message} visibleToast={isVisibleToast} />
          </SafeAreaView>
        </ScrollView>
        <NextButton
          TextButton="Save Changes"
          backgroundColor={COLORS.lightPink}
          onPress={changePassword}
        />
      </View>
    </>
  );
}
