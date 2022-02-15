//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../src/consts/color';

const { width, height, fontScale } = Dimensions.get('window');

// create a component
const MessageInputField = ({ onSend }) => {
  const [message, setMessage] = useState('');
  return (
    <View
      style={{
        borderTopColor: COLORS.grey,
        borderTopWidth: 1,
        paddingVertical: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: COLORS.white,
      }}
    >
      <View>
        <Image
          source={require('../../src/assets/gif-icon.png')}
          style={{ height: 35 }}
        />
      </View>
      <View>
        <Image
          source={require('../../src/assets/gallery-icon.png')}
          style={{ height: 35 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 36,
          borderWidth: 1,
          borderColor: COLORS.grey,
          width: width / 1.5,
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Send message..."
          style={{ flexGrow: 1 }}
          onChangeText={setMessage}
          value={message}
        />
        <View>
          <Image
            source={require('../../src/assets/emoji-icon.png')}
            style={{ height: 35 }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            onSend(message);
            setMessage('');
          }}
        >
          <Image
            source={require('../../src/assets/send-icon.png')}
            style={{ height: 35 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => console.log({ message: text })}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      />
      <Button onPress={() => console.log(this)} title="SEND" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

//make this component available to the app
export default MessageInputField;
