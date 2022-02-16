import React from 'react';
import { View, Image, Dimensions, Text, Card } from 'react-native';
import { Header } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { height, width, fontScale } = Dimensions.get('window');

const MessageBubbles = ({
  time,
  currentUser,
  message,
  image,
  previousTime,
}) => {
  function formatDate(date) {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (
      date.getMonth() +
      1 +
      '/' +
      date.getDate() +
      '/' +
      date.getFullYear() +
      '  ' +
      strTime
    );
  }

  // console.log(
  //   new Date(time),
  //   new Date(previousTime),
  //   new Date(time) - new Date(previousTime) >= 60000
  // );
  return (
    <View style={{ display: message === ' ' ? 'none' : 'flex' }}>
      <View
        style={{
          alignItems: 'center',
          display: time === time ? 'flex' : 'none',
        }}
      >
        {!previousTime || new Date(time) - new Date(previousTime) >= 60000 ? (
          <Text style={{ color: COLORS.grey, fontSize: 10 / fontScale }}>
            {formatDate(time)}
          </Text>
        ) : (
          <></>
        )}
      </View>
      <View style={currentUser ? styles.selfMessage : styles.otherMessage}>
        {message !== '' ? (
          <Text style={currentUser ? { color: 'white' } : { color: 'black' }}>
            {message}
          </Text>
        ) : (
          <Card
            style={currentUser ? styles.selfMessage : styles.otherMessage}
            elevation={5}
          >
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 100, height: 100 }}
              />
            )}
          </Card>
        )}
      </View>
    </View>
  );
};

const styles = {
  itemStyle: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    width: width - 20,
    justifyContent: 'space-between',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    marginVertical: 10,
    padding: 10,
    maxWidth: width - 44,
    left: 22,
    backgroundColor: '#FFFFFF',
    borderColor: '#8999A8',
    borderWidth: 0.5,
    boxSizing: 'border-box',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
  selfMessage: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    padding: 10,
    maxWidth: width - 44,
    right: 22,
    backgroundColor: '#1381A2',
    borderColor: '#1381A2',
    borderWidth: 0.5,
    boxSizing: 'border-box',
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
  },
};

export default MessageBubbles;
