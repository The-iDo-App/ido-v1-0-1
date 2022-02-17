import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import COLORS from '../../src/consts/color';

const { width } = Dimensions.get('window');

export default function BlockedUserComponent({
  onPress,
  image,
  nickname,
  email,
}) {
  return (
    <View style={style.wrapper}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Avatar.Image size={60} source={image} />
          <View style={{ display: 'flex', marginLeft: 10 }}>
            <Text
              style={{ fontSize: 16, color: COLORS.blue, fontWeight: '700' }}
            >
              {nickname}
            </Text>
            <Text
              style={{ fontSize: 14, color: COLORS.grey, fontWeight: '300' }}
            >
              {email}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: 10,
            borderColor: COLORS.blue,
            borderWidth: 1,
            borderRadius: 10,
          }}
          onPress={onPress}
        >
          <Text style={{ fontSize: 16, color: COLORS.grey, fontWeight: '300' }}>
            UNBLOCK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    width: width - 40,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
});
