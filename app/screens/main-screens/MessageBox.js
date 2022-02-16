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
import * as ImagePicker from 'expo-image-picker'
import MessageSettingsModal from '../../components/MessageSettings';
import ConfirmationModal from '../../components/MessageSettings/confirmModal';


const { height, width } = Dimensions.get('window');
const {screenHeight} =Dimensions.get('screen');

export default function MessageBox({ route, navigation }) {
  const [message, setMessage] = useState('');
  const [showEmojis, setShowEmojis] = useState(false);
  const [emoji, setEmoji] = useState('');
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [timestamp, setTimeStamp] =useState('');
  const [currentIndex, setCurrentIndex] = useState(fakeMessages.length);
  const [openModalSettings, setOpenModalSettings] = useState(false);
  const [openBlockUserModal, setOpenBlockUserModal] = useState(false);
  const [openReportUserModal, setOpenReportUserModal] = useState(false);
  const [openLeaveUserModal, setOpenLeaveUserModal] = useState(false);


  
    const [photo, setPhoto] = useState(null);

    const [uri, setUri] = useState(null);
    const [src, setSrc] = useState(null);

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
    setInterval(() => tick(), 1000)
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyBoardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyBoardDidHide);
    };
  }, [])

  const tick = () => {
    var dateNow = moment().format('LLLL');
    setTimeStamp(dateNow.toString());
  }


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
  })

  const handleSelectImage = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true, 
            aspect: [1, 1], 
            quality: 1,
        });
      if (!result.cancelled){
            setUri(result.uri);
        }

  }
  
  const data = {
    message: message,
    time: timestamp.toString(),
    currentUser: true,
    image: uri
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
      setEmoji("");
      
  }

  

  const handleSelectCamera = () => {
    console.log('gif')
  }

  const scrollViewChanges = () => {
    scrollViewRef.current.scrollToEnd(0);
  }

  const handleMessage = (emoji, message) => {
  setMessage(emoji, message);
    
  }

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


  return (
    <>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
        openSettings={() => setOpenModalSettings(true)}
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
                      image={chat.image}
                    />
                 </React.Fragment>
               ))
             }
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
            <EmojiSelector onEmojiSelected={handleMessage} showHistory={true} columns={6}  showSearchBar={false} />
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


