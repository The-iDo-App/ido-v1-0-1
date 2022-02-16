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
import * as ImagePicker from 'expo-image-picker';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import axios from 'axios';

const { height, width } = Dimensions.get('window');
const { screenHeight } = Dimensions.get('screen');

export default function MessageBox({ route, navigation }) {
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [timestamp, setTimeStamp] = useState('');
  const [currentIndex, setCurrentIndex] = useState(fakeMessages.length);
  //States
  const [photo, setPhoto] = useState(null);

  const [uri, setUri] = useState(null);
  const [src, setSrc] = useState(null);

  const scrollViewRef = React.useRef();
  let bottomNavBarH = screenHeight - width;

  function onKeyBoardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height + bottomNavBarH);
  }

  function onKeyBoardDidHide() {
    setKeyboardHeight(0);
  }

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

  const { name, profile_picture } = route.params;

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
      await axios.post('http://192.168.1.11:3000/', { image: fullBase64 });
    }
  };

  const handleSelectCamera = () => {
    console.log('gif');
  };

  const scrollViewChanges = () => {
    scrollViewRef.current.scrollToEnd(0);
  };

  const handleMessage = (emoji, message) => {
    setMessage(emoji, message);
  };

  return (
    <>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
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
            {fakeMessages.map((chat, index) => (
              <React.Fragment key={index}>
                <MessageBubbles
                  message={chat.message}
                  currentUser={chat.currentUser}
                  time={chat.time}
                  key={chat.key}
                  image={uri}
                />
              </React.Fragment>
            ))}
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
      <View
        style={{
          display: showEmojis ? 'flex' : 'none',
          height: 400,
          backgroundColor: 'white',
        }}
      >
        <EmojiSelector
          onEmojiSelected={handleMessage}
          showHistory={true}
          columns={6}
          showSearchBar={false}
        />
      </View>
    </>
  );
}
