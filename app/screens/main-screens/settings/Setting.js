import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingList from '../../../models/SettingList';
import SettingList2 from '../../../models/SettingListT';
import { ScrollView } from 'react-native-gesture-handler';
import DeleteAccountModal from '../../../components/DeleteAccount';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';

const ItemSettings = ({ onPress, label, deleteAccount }) => {
  return (
    <View style={styling.settingItemWrapper}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styling.settingItemText,
            { color: deleteAccount ? COLORS.darkPink : COLORS.grey },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Settings({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openSmallModal, setOpenModal] = useState(false);

  const [selectReason, setSelectReason] = React.useState('');
  const [reasoning, setReasoning] = React.useState(null);

  const res = Object.values(SettingList).map((value) => {
    return value;
  });

  const res2 = Object.values(SettingList2).map((value) => {
    return value;
  });

  const handleDeleteAccount = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    await axios.post(
      `${BACKEND_BASEURL}/api/settings/account-deletion`,
      {},
      {
        headers: { authorization: access_token },
      }
    );
    //deleted account mapupunta sa login
    setOpenModal(false);
    setOpen(false);
    signOut(); // ito muna
  };

  const handleReasons = (key, reasoning) => {
    setReasoning(reasoning);
    setSelectReason(key);
  };

  // pag naclose ung main modal, marereset ung state
  const closeModal = () => {
    setOpen(false);
    setReasoning(null);
    setSelectReason('');
  };

  return (
    <>
      <HeaderWrapper />
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <View style={styling.settingGroupWrapper}>
            {res.map((item, index) => (
              <React.Fragment key={index}>
                <ItemSettings
                  deleteAccount={false}
                  label={item.label}
                  onPress={() => navigation.navigate(`${item.route}`)}
                />
              </React.Fragment>
            ))}
          </View>
          <View style={styling.settingGroupWrapper}>
            {res2.map((item, index) => (
              <React.Fragment key={index}>
                <ItemSettings
                  deleteAccount={false}
                  label={item.label}
                  onPress={() => navigation.navigate(`${item.route}`)}
                />
              </React.Fragment>
            ))}
          </View>
          <View style={styling.settingGroupWrapper}>
            <ItemSettings
              deleteAccount={false}
              label="Logout"
              onPress={() => signOut()}
            />
            <ItemSettings
              deleteAccount={true}
              label="Delete Account"
              onPress={() => setOpen(true)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <DeleteAccountModal
        modalVisible={open}
        confirmModal={openSmallModal}
        openSmallModal={() => setOpenModal(true)}
        closeSmallModal={() => setOpenModal(false)}
        onPress={closeModal}
        handleDeleteAccount={handleDeleteAccount}
        handleReason={handleReasons}
        selectReason={selectReason}
      />
    </>
  );
}

const styling = StyleSheet.create({
  settingItemWrapper: {
    display: 'flex',
    padding: 16,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 0.2,
  },
  settingItemText: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingGroupWrapper: {
    marginTop: 5,
    marginBottom: 35,
  },
});
