import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import COLORS from '../../src/consts/color';
import MessageBoxHeaderWrapper from '../../components/MessageBoxHeader';
import fakeMessages from '../../models/fakeMessages';
import MessageBoxMessage from '../../components/MessageBoxMessage';
import MessageInputField from '../../components/MessageInputField';

const { height, width } = Dimensions.get('window');

export default function MessageBox({ route, navigation }) {
  const { name, profile_picture } = route.params;
  const [messages, setMessages] = useState(fakeMessages);

  const getDate = () => {
    const d = new Date();
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return `${date} ${time}`;
  };

  const send = (message) => {
    // console.log(message);
    const messageObject = {
      from: 'self',
      message,
      time: getDate(),
      key: Math.random(),
    };
    setMessages([...messages, messageObject]);
  };

  return (
    <>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
      />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
          <View>
            {messages.map((messageObject) => {
              return (
                <MessageBoxMessage
                  key={messageObject.key}
                  messageObject={messageObject}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <MessageInputField onSend={send} />
    </>
  );
}

const styles = StyleSheet.create({});
