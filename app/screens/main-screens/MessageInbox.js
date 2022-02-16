import React from 'react';
import { ScrollView,  View } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import MessageOverview from '../../components/MessageOverview';
import fakeMessageOverviews from '../../models/fakeMessageOverviews';


export default function MessageInbox({ navigation }) {
  return (
    <>
      <HeaderWrapper />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
          {/* <TouchableOpacity onPress={() => navigation.navigate('MessageBox')}> */}
          {/*   <Text>Chatbox</Text> */}
          {/* </TouchableOpacity> */}
        </ScrollView>
      </View>
    </>
  );
}
