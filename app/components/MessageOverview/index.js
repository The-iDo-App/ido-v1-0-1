//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../src/consts/color';
import MessageBox from '../../screens/main-screens/MessageBox';

const { width, height, fontScale } = Dimensions.get('window');

// create a component
const MessageOverview = ({
  ProfilePicture,
  Name,
  LatestMessage,
  Time,
  id,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: 'white' }}
      onPress={() => {
        navigation.navigate('MessageBox', {
          name: Name,
          profile_picture: ProfilePicture,
          id,
        });
      }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={ProfilePicture} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              justifyContent: 'space-around',
              width: width - 160,
            }}
          >
            <Text style={styles.title}>{Name}</Text>
            <Text>
              {LatestMessage.length > 30
                ? LatestMessage.substring(0, 30) + '...'
                : LatestMessage}
            </Text>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Text>{Time}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: COLORS.grey,
          borderBottomWidth: 1,
        }}
      />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    borderRadius: 55,
  },
  container: {
    paddingHorizontal: 10,
    marginVertical: 15,
    width: width - 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    color: COLORS.blue,
    fontSize: 16 / fontScale,
    fontWeight: '700',
  },
  debug: {
    backgroundColor: 'yellow',
    borderWidth: 5,
  },
});

//make this component available to the app
export default MessageOverview;
