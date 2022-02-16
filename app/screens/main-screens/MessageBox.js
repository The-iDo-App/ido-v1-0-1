import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import COLORS from '../../src/consts/color';
import MessageBoxHeaderWrapper from '../../components/MessageBoxHeader';
import fakeMessages from '../../models/fakeMessages';
import MessageBoxMessage from '../../components/MessageBoxMessage';
import MessageInput from '../../components/MessageInput';
import EmojiSelector from 'react-native-emoji-selector';
import MessageBubbles from '../../components/MessageBoxMessage';
import moment from 'moment';
import * as ImagePicker from 'expo-image-picker'
import MessageSettingsModal from '../../components/MessageSettings';
import ConfirmationModal from '../../components/MessageSettings/confirmModal';

import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WS_URL } from '@env';
import io from 'socket.io-client/dist/socket.io';

const { height, width } = Dimensions.get('window');
const { screenHeight } = Dimensions.get('screen');

export default function MessageBox({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [timestamp, setTimeStamp] = useState('');
  const [currentIndex, setCurrentIndex] = useState(fakeMessages.length);

  const [openModalSettings, setOpenModalSettings] = useState(false);
  const [openBlockUserModal, setOpenBlockUserModal] = useState(false);
  const [openReportUserModal, setOpenReportUserModal] = useState(false);
  const [openLeaveUserModal, setOpenLeaveUserModal] = useState(false);

  const [socket, setSocket] = useState(io(WS_URL));
  //States
  const [photo, setPhoto] = useState(null);

  const [uri, setUri] = useState(null);
  const [src, setSrc] = useState(null);

  const scrollViewRef = React.useRef();
  let bottomNavBarH = screenHeight - width;

  const { name, profile_picture, id, myId } = route.params;

  // console.log(route.params);

  function onKeyBoardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height + bottomNavBarH);
  }

  function onKeyBoardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const user_id = await AsyncStorage.getItem('userId');

    if (socket !== undefined) {
      // console.log('Connected to socket...');

      // Handle Output
      socket.emit('viewOne', {
        from: user_id,
        to: id,
      });
      socket.on('showChat', function (data) {
        // console.log(data);
        let chats = data.chats;
        setMessages(chats);
      });
    }
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { granted } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useLayoutEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyBoardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyBoardDidHide);
    setInterval(() => tick(), 1000);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyBoardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyBoardDidHide);
    };
  }, []);

  const tick = () => {
    var dateNow = moment().format('LLLL');
    setTimeStamp(dateNow.toString());
  };

  const handleEmojiPicker = () => {
    setShowEmojis(true);
    Keyboard.dismiss();
    console.log('emoji');
  };

  const hideEmojiTab = () => {
    if (showEmojis) {
      setShowEmojis(false);
    }
  };

  useEffect(() => {
     (async () => {
                if(Platform.OS !== 'web'){
                    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (!granted){
                        alert('Sorry, we need camera roll permissions to make this work!');
                    }
                }
     })();
    BackHandler.addEventListener('hardwareBackPress', hideEmojiTab);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hideEmojiTab);
    };
  });

  const data = {
    message: message,
    time: timestamp.toString(),
    currentUser: true,
  };

  const handleSendMessage = () => {
    // Keyboard.dismiss();
    // setSendMessageItems([...sendMessageItems, sendMessage]);
    // setSendMessage(null);
    // console.log(sendMessage)
    // setCurrentIndex(currentIndex++);
    socket.emit('input', {
      from: myId,
      to: id,
      message,
    });
    console.log({ myId, id, message });
    console.log('========================================================');

    console.log(data);
    fakeMessages.push(data);
    console.log('buttonClicked');
    setMessage(null);
    setEmoji('');
  };


  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      setUri(result.uri);
      // console.log(respath.extension(result.uri);
      const extension = result.uri.substr(result.uri.lastIndexOf('.') + 1);
      const fullBase64 =
        'data:image/' + extension + ';base64, ' + result.base64;
      // await axios.post('http://192.168.1.11:3000/', { image: fullBase64 });
      socket.emit('input', {
        from: myId,
        to: id,
        message: '',
        image: fullBase64,
      });
    }
  };

  const handleSelectCamera = async () => {
    console.log('gif');
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0,
    });

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setUri(result.uri);
      // console.log(path.extension(result.uri);
      const fullBase64 = 'data:image/jpeg;base64, ' + result.base64;
      // await axios.post('http://192.168.1.11:3000/', { image: fullBase64 });
      socket.emit('input', {
        from: myId,
        to: id,
        message: '',
        image: fullBase64,
      });
    }
  };

  const scrollViewChanges = () => {
    scrollViewRef.current.scrollToEnd(0);
  };

  const handleMessage = (emoji, message) => {
    setMessage(emoji, message);
  };

  const _openBlockUserModal = () => {
    //blockUserFunction
    setOpenBlockUserModal(true);
  }

  const _openReportUserModal = () => {
    //reportUserFunction
    setOpenReportUserModal(true);
  }

  const  _openLeaveUserModal = () => {
    //leaveUserFunction
    setOpenLeaveUserModal(true);
  }

  const blockUserModal = () => {
    return(
      <ConfirmationModal 
        visible={openBlockUserModal}
        close={() => setOpenBlockUserModal(false)}
        cancel={() => setOpenBlockUserModal(false)}
        header="Block user"
        body={
          <>
            <Text style={{color: COLORS.grey, fontSize: 18}} >
              Do you want to block this user? If you block this user, this conversation will no longer be on you inbox, and this user will be moved to the blocked list of users. This user will no longer have the means to contact you. 
            </Text>
          </>
        }
        okay={blockUser}
      />
    );
  }

  const reportUserModal = () => {
    return(
      <ConfirmationModal 
        visible={openReportUserModal}
        close={() => setOpenReportUserModal(false)}
        cancel={() => setOpenReportUserModal(false)}
        header="Report user"
        body={
          <>
            <Text style={{color: COLORS.grey, fontSize: 18}} >
              Do you want to report this user? If you report this user, this conversation will no longer be on you inbox, and this user will be moved to the blocked list of users.
            </Text>
          </>
        }
        okay={reportUser}
      />
    );
  }

  const leaveUserModal = () => {
    return(
      <ConfirmationModal 
        visible={openLeaveUserModal}
        close={() => setOpenLeaveUserModal(false)}
        cancel={() => setOpenLeaveUserModal(false)}
        header="Leave Conversation"
        body={
          <>
            <Text style={{color: COLORS.grey, fontSize: 18}} >
              Do you want to leave this conversation? If you leave this conversation, this conversation will no longer be on you inbox, and this user will be moved to the blocked list of users.
            </Text>
          </>
        }
        okay={leaveUser}
      />
    );
  }

  const blockUser = () => {
    //functionality
    //mapupunta sa inbox
    navigation.goBack();
  }

  const reportUser = () => {
    //functionality
    //mapupunta sa inbox
    navigation.goBack();
  }

  const leaveUser = () => {
    //functionality
    //mapupunta sa inbox
    navigation.goBack();
  }

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

  return (
    <>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
        openSettings={() => setOpenModalSettings(true)}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: COLORS.white }}
        contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
        enabled
      >
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={scrollViewChanges}
          style={{ flex: 1 }}
          contentContainerStyle={{ justifyContent: 'flex-end' }}
        >
          <View
            onTouchMove={() => setShowEmojis(false)}
            onTouchCancel={() => setShowEmojis(false)}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: keyboardHeight < width ? 10 : 20,
            }}
          >
            {messages.map((chat, index) => {
              return (
                <React.Fragment key={chat._id}>
                  <MessageBubbles
                    message={chat.body}
                    currentUser={myId == chat.senderId}
                    time={chat.timeSent}
                    key={chat._id}
                    image={chat.image ? chat.image : ''}
                    previousTime={index ? messages[index - 1].timeSent : null}
                  />
                </React.Fragment>
              );
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

       <MessageInput 
       handleEmojiPicker={handleEmojiPicker} 
       handleSelectGIF={handleSelectCamera} 
       handleSendMessage={handleSendMessage} 
       handleSelectImage={handleSelectImage}
       onChangeText={handleMessage}
       onPressIn={() => setShowEmojis(false)}
       value={message}
       />
       <View style={{display: showEmojis ? 'flex' : 'none', height: 400, backgroundColor: 'white'}} >
            <EmojiSelector onEmojiSelected={handleMessage} showHistory={true} columns={9}  showSearchBar={false} />
       </View>
       
       <MessageSettingsModal 
          parentModalVisible={openModalSettings}
          goBackFunction={() => setOpenModalSettings(false)}   
          reportUserFunction={_openReportUserModal}
          blockUserFunction={_openBlockUserModal}
          leaveConversation={_openLeaveUserModal}
       />
        {blockUserModal()}
        {reportUserModal()}
        {leaveUserModal()}

    </>
  );
}
