import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';
import AuthenticationStyle from '../../src/styles/screens/authentication';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import COLORS from '../../src/consts/color';

const { width, height } = Dimensions.get('window');

export default function ChangePasswordComponent({ report }) {
  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    report(data);
  }, [data]);

  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const passwordFields = [
    {
      isVisible: isOldPasswordVisible,
      setIsVisible: setIsOldPasswordVisible,
      name: 'Old Password',
      key: 'oldPassword',
    },
    {
      isVisible: isNewPasswordVisible,
      setIsVisible: setIsNewPasswordVisible,
      name: 'New Password',
      key: 'newPassword',
    },
    {
      isVisible: isConfirmPasswordVisible,
      setIsVisible: setIsConfirmPasswordVisible,
      name: 'Confirm Password',
      key: 'confirmPassword',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
      }}
    >
      {passwordFields.map((passwordField) => {
        return (
          <>
            <View style={AuthenticationStyle.action}>
              <FontAwesome name="lock" color="#8999a8" size={30} />
              <TextInput
                secureTextEntry={!passwordField.isVisible ? true : false}
                placeholder={passwordField.name}
                style={AuthenticationStyle.textInput}
                onChangeText={(val) => {
                  let t = data;
                  data[passwordField.key] = val;
                  setData(data);
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  passwordField.setIsVisible(!passwordField.isVisible)
                }
              >
                {!passwordField.isVisible ? (
                  <Feather name="eye-off" color="#91C2D0" size={20} />
                ) : (
                  <Feather name="eye" color={COLORS.blue} size={20} />
                )}
              </TouchableOpacity>
            </View>
          </>
        );
      })}
    </View>
  );
}
