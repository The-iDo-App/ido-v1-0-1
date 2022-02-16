import React from 'react';
import { View, Image, Dimensions, Text, Card } from 'react-native';
import { Header } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { height, width, fontScale } = Dimensions.get('window');

const MessageBubbles = ({time, currentUser, message, image}) => {
  console.log(image);
  return (
    <View style={{display: message === " " ? 'none' : 'flex'}} >
      <View style={{ alignItems: 'center', display: time === time ? 'flex' : 'none' }}>
        <Text style={{ color: COLORS.grey, fontSize: 10 / fontScale }}>
          {time}
        </Text>
      </View>
      <View style={currentUser ? styles.selfMessage : styles.otherMessage}>
          {
            message !== "" ?
            (
              <Text style={ currentUser ? { color: 'white' } : { color: 'black' }}>
                {message}
              </Text>
            ):
            (
              <Card style={currentUser ? styles.selfMessage : styles.otherMessage} elevation={5} >
                  {
                    image && <Image source={{image}} style={{width: 100, height: 100}} resizeMode="contain" />
                  } 
              </Card>
            )
          }
          
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
