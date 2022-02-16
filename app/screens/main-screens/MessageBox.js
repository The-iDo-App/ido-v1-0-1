import React, {useLayoutEffect, useEffect, useState} from 'react';
import { View, Text, ScrollView, Dimensions,  Keyboard, KeyboardAvoidingView, BackHandler } from 'react-native';
import COLORS from '../../src/consts/color';
import MessageBoxHeaderWrapper from '../../components/MessageBoxHeader';
import fakeMessages from '../../models/fakeMessages';
import MessageBoxMessage from '../../components/MessageBoxMessage';
import MessageInput from '../../components/MessageInput';
import EmojiSelector from 'react-native-emoji-selector'
import MessageBubbles from '../../components/MessageBoxMessage';
import moment from 'moment';



const { height, width } = Dimensions.get('window');
const {screenHeight} =Dimensions.get('screen');

export default function MessageBox({ route, navigation }) {
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState([]);
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [timestamp, setTimeStamp] =useState('');
  const [currentIndex, setCurrentIndex] = useState(fakeMessages.length);

  const scrollViewRef = React.useRef();
  let bottomNavBarH = screenHeight - width;

  function onKeyBoardDidShow(e: KeyboardEvent){
    setKeyboardHeight(e.endCoordinates.height + bottomNavBarH);
  }

  function onKeyBoardDidHide(){
    setKeyboardHeight(0);
  }

  useLayoutEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyBoardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyBoardDidHide);
    var dateNow = moment().format('LLLL');
    setTimeStamp(dateNow);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyBoardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyBoardDidHide);
    };
  }, [])

  const { name, profile_picture } = route.params;

  const handleEmojiPicker = () => {
      setShowEmojis(true);
      Keyboard.dismiss();
      console.log('emoji');
  }

  const hideEmojiTab = () => {
      if(showEmojis){
        setShowEmojis(false);
      }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', hideEmojiTab);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', hideEmojiTab);
    };
  })
  
  const data = {
    message: message,
    timestamp: timestamp,
    currentUser: true,
  }


  const handleSendMessage = () => {
      // Keyboard.dismiss();
      // setSendMessageItems([...sendMessageItems, sendMessage]);
      // setSendMessage(null);
      // console.log(sendMessage)
      // setCurrentIndex(currentIndex++);
      console.log(data);
      fakeMessages.push(data);
      console.log('buttonClicked')
      setMessage(null);
  }

  const handleSelectImage = () => {
     console.log('image')
  }

  const handleSelectGIF = () => {
    console.log('gif')
  }

  const scrollViewChanges = () => {
    scrollViewRef.current.scrollToEnd(0);
  }

  const handleMessage = (message) => {
      setMessage(emoji, message);
      console.log(emoji, message)
  }

  const handleEmoji = (emoji) => {
    setEmoji(emoji);
    // console.log(emoji);
  }

  return (
    <>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
      />
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLORS.white}} contentContainerStyle={{flex: 1, justifyContent: 'flex-end'}} enabled > 
        <ScrollView  ref={scrollViewRef} onContentSizeChange={scrollViewChanges} style={{flex: 1}} contentContainerStyle={{justifyContent: 'flex-end'}} >
          <View onTouchMove={() => setShowEmojis(false) } onTouchCancel={() => setShowEmojis(false) } style={{flex: 1, justifyContent: 'flex-end', marginBottom: keyboardHeight < width ? 10 : 20}} >
             {
               fakeMessages.map((chat, index) => (
                 <React.Fragment key={index} >
                    <MessageBubbles 
                      message={chat.message}
                      currentUser={chat.currentUser}
                      time={chat.time}
                      key={chat.key}
                    />
                 </React.Fragment>
               ))
             }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
     
       <MessageInput 
       handleEmojiPicker={handleEmojiPicker} 
       handleSelectGIF={handleSelectGIF} 
       handleSendMessage={handleSendMessage} 
       handleSelectImage={handleSelectImage}
       onChangeText={handleMessage}
       onPressIn={() => setShowEmojis(false)}
       value={message}
       />
       <View style={{display: showEmojis ? 'flex' : 'none', height: 400, backgroundColor: 'white'}} >
            <EmojiSelector onEmojiSelected={handleEmoji} showHistory={true} columns={9}  showSearchBar={false} />
       </View>
       
        
      

      
  
    </>
  );
}


