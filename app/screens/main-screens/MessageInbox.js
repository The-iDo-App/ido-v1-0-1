import React from 'react';
import { ScrollView, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageOverview from '../../components/MessageOverview';
import fakeMessageOverviews from '../../models/fakeMessageOverviews';

export default function MessageInbox({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderWrapper />
      <ScrollView style={{ overflow: 'scroll' }}>
        {fakeMessageOverviews.map(
          ({ key, profile_picture, name, latest_message, time, _id }) => {
            return (
              <MessageOverview
                key={key}
                ProfilePicture={profile_picture}
                Name={name}
                LatestMessage={latest_message}
                Time={time}
                id={_id}
                navigation={navigation}
              />
            );
          }
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
