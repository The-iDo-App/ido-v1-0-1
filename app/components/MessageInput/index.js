import React from 'react';
import { View, Text, TextInput, Dimensions, Pressable } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';

const { height, width } = Dimensions.get('window');


export default function MessageInput({value ,onPressIn,onChangeText, handleSelectGIF, handleSelectImage, handleEmojiPicker, handleSendMessage}) {
  return (
    <View style={{ padding: 10, backgroundColor: COLORS.white, borderTopColor: COLORS.grey, borderTopWidth: 0.5, display: 'flex', flexDirection: 'row', width: width, justifyContent: 'space-between', alignItems: 'center' }}>
        <Pressable onPress={handleSelectImage}>
        <MaterialIcons name='image' size={40} color={COLORS.darkPink} />
        </Pressable>
        <Pressable onPress={handleSelectImage}>
        <MaterialIcons name='camera-alt' size={40} color={COLORS.darkPink} />
        </Pressable>
        <View style={{ borderColor: COLORS.grey, borderWidth: 1, borderRadius: 40, padding: 10, display: 'flex', flexDirection: 'row' }}>
        <TextInput value={value}  onPressIn={onPressIn} onChangeText={onChangeText} placeholder='Send your message here' style={{ color: COLORS.blue, width: width / 1.95, fontSize: 16 }} multiline ></TextInput>
        <Pressable onPress={handleEmojiPicker}>
            <MaterialIcons name='emoji-emotions' size={30} color={COLORS.darkPink} />
        </Pressable>
        </View>
        <Pressable onPress={handleSendMessage}>
        <MaterialIcons name='send' size={40} color={COLORS.darkPink} />
        </Pressable>

  </View>
  );
}
