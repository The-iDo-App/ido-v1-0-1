import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import MessageOverview from '../../components/MessageOverview';
import fakeMessageOverviews from '../../models/fakeMessageOverviews';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client/dist/socket.io';
import { WS_URL } from '@env';

export default function MessageInbox({ navigation }) {
  const [messages, setMessages] = useState([]);

  const parseTime = (time) => {
    time = new Date(time);
    time = time.toString().split(' ')[4].split(':').slice(0, 2);
    time[0] = time[0] > 12 ? time[0] - 12 : time[0];
    let ext = time[0] > 12 ? 'PM' : 'AM';
    time[0] = time[0] === '00' ? '12' : time[0];
    ext = time[0] === '00' ? 'AM' : 'PM';
    time = time.join(':').concat(' ').concat(ext);
    return time;
  };

  useEffect(async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const user_id = await AsyncStorage.getItem('userId');

    const socket = io(WS_URL);

    if (socket !== undefined) {
      console.log('Connected to socket...');
      // Handle Output
      socket.emit('viewAllUsers', user_id);
      socket.on('showAllUsers', function (data) {
        // data = data.filter((message) => message.timeSent);
        data.map((message) => {
          message.timeSent = message.timeSent
            ? parseTime(message.timeSent)
            : null;
        });
        setMessages(data);
      });

      socket.on('newMessage', function (data) {
        let chat = data.chats[0];
        let me = chat.senderId === user_id ? 'sender' : 'receiver';
        let otherUser = me === 'sender' ? 'receiver' : 'sender';
        console.log(chat, me, otherUser);
        // document.getElementById(data[otherUser]._id)?.remove();
        chat.timeSent = chat.timeSent ? parseTime(chat.timeSent) : null;
        let temp = messages.filter(
          (message) => message[otherUser]._id != data[otherUser]._id
        );
        setMessages([chat, temp]);
        console.log(messages);
      });
    }
  }, []);

  return (
    <>
      <HeaderWrapper />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView style={{ overflow: 'scroll' }}>
          {
            (console.log(messages),
            messages.map(
              ({
                profile,
                picture,
                username,
                latestMessage,
                timeSent,
                _id,
                myId,
              }) => {
                return (
                  <MessageOverview
                    key={_id}
                    ProfilePicture={
                      profile?.picture.originalImage || picture?.originalImage
                    }
                    Name={username}
                    LatestMessage={latestMessage}
                    Time={timeSent}
                    id={_id}
                    navigation={navigation}
                    myId={myId}
                  />
                );
              }
            ))
          }
          {/* <TouchableOpacity onPress={() => navigation.navigate('MessageBox')}> */}
          {/*   <Text>Chatbox</Text> */}
          {/* </TouchableOpacity> */}
        </ScrollView>
      </View>
    </>
  );
}
