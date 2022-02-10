import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import MessageBoxHeaderWrapper from '../../components/MessageBoxHeader';
import fakeMessages from '../../models/fakeMessages';
import MessageBoxMessage from '../../components/MessageBoxMessage';

const { height, width } = Dimensions.get('window');

export default function MessageBox({ route, navigation }) {
  const { name, profile_picture } = route.params;
  return (
    <View>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
      />
      <ScrollView
        style={{
          marginBottom: height / 11 + 30,
          backgroundColor: 'white',
        }}
      >
        {fakeMessages.map((messageObject) => {
          return (
            <MessageBoxMessage
              key={messageObject.key}
              messageObject={messageObject}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
