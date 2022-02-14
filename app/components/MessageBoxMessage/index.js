import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { Header } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { height, width, fontScale } = Dimensions.get('window');

const MessageBoxMessage = ({ messageObject }) => {
  const { message, from, time } = messageObject;
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: COLORS.grey, fontSize: 10 / fontScale }}>
          {time}
        </Text>
      </View>
      <View style={from === 'self' ? styles.selfMessage : styles.otherMessage}>
        <Text style={from === 'self' ? { color: 'white' } : { color: 'black' }}>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  itemStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    marginVertical: 10,
    padding: 10,
    maxWidth: width - 44,
    left: 22,
    backgroundColor: '#FFFFFF',
    borderColor: '#8999A8',
    borderWidth: 0.5,
    boxSizing: 'border-box',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  selfMessage: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    padding: 10,
    maxWidth: width - 44,
    right: 22,
    backgroundColor: '#1381A2',
    borderColor: '#1381A2',
    borderWidth: 0.5,
    boxSizing: 'border-box',
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
};

export default MessageBoxMessage;
