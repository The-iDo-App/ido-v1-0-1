import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import MessageOverview from '../../components/MessageOverview';
import fakeMessageOverviews from '../../models/fakeMessageOverviews';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client/dist/socket.io';

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

    const socket = io('ws://192.168.1.11:3000');

    if (socket !== undefined) {
      console.log('Connected to socket...');
      // Handle Output
      socket.emit('viewAllUsers', user_id);
      socket.on('showAllUsers', function (data) {
        data = data.filter((message) => message.timeSent);
        data.map((message) => {
          message.timeSent = parseTime(message.timeSent);
        });
        setMessages(data);
      });

      socket.on('newMessage', function (data) {
        let chat = data.chats[0];
        let me =
          chat.senderId === localStorage.getItem('user_id')
            ? 'sender'
            : 'receiver';
        let otherUser = me === 'sender' ? 'receiver' : 'sender';
        console.log(data);
        // document.getElementById(data[otherUser]._id)?.remove();
        chat.timeSent = parseTime(chat.timeSent);
        setMessages(
          messages.filter(
            (message) => message[otherUser]._id != data[otherUser]._id
          )
        );
      });
    }
  }, []);

  return (
    <>
      <HeaderWrapper />
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView style={{ overflow: 'scroll' }}>
          {messages.map(
            ({ picture, username, latestMessage, timeSent, _id }) => {
              return (
                <MessageOverview
                  key={_id}
                  ProfilePicture={picture.originalImage}
                  Name={username}
                  LatestMessage={latestMessage}
                  Time={timeSent}
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
