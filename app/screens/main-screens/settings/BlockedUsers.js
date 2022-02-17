import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import COLORS from '../../../src/consts/color';
import { FontAwesome } from '@expo/vector-icons';
import { AuthContext } from '../../../components/context';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsMainTitle from '../../../components/settingsTitle';
import BlockedUserComponent from '../../../components/BlockedUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_DEVURL } from '@env';
import axios from 'axios';

export default function BlockedUsersScreen({ navigation }) {
  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    let res = await axios.get(`${BACKEND_DEVURL}/api/settings/blocked-users`, {
      headers: { authorization: access_token },
    });

    setBlockedUsers(res.data.users);
  }, []);

  const unblockUser = async (user_id) => {
    const access_token = await AsyncStorage.getItem('access_token');
    let res = await axios.delete(
      `${BACKEND_DEVURL}/api/settings/blocked-users`,
      {
        headers: {
          authorization: access_token,
        },
        data: {
          user_id,
        },
      }
    );
    console.log(res.data);
    if (res.data.success) {
      setBlockedUsers(blockedUsers.filter((user) => user._id !== user_id));
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
            <SettingsMainTitle title="Blocked Users" des={null} />
            {blockedUsers.map((user) => {
              return (
                <BlockedUserComponent
                  image={{ uri: user.profile.picture.originalImage }}
                  key={user._id}
                  nickname={user.username}
                  email={user.email}
                  onPress={() => unblockUser(user._id)}
                />
              );
            })}
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
}
