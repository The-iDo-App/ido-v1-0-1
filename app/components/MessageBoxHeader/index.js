import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { height, width, fontScale } = Dimensions.get('window');

const BackButtonAndName = ({ name, profile_picture, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.itemStyle}>
            <Image
              source={require('../../src/assets/back.png')}
              resizeMode="contain"
              style={{ width: 19, height: 18 }}
            />
          </View>
        </TouchableOpacity>
        <View style={{ ...styles.itemStyle, marginHorizontal: 10 }}>
          <Image
            source={{ uri: profile_picture }}
            style={{ width: 45, height: 45, borderRadius: 30 }}
          />
        </View>
        <View
          style={{
            ...styles.itemStyle,
            alignItems: 'flex-start',
          }}
        >
          <Text
            style={{
              color: COLORS.blue,
              fontWeight: '700',
              fontSize: 14 / fontScale,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.itemStyle, alignSelf: 'flex-end' }}>
        <Image
          source={require('../../src/assets/info.png')}
          resizeMode="contain"
          style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
  );
};

const MessageBoxHeaderWrapper = ({ Name, ProfilePicture, navigation }) => {
  return (
    <>
      <Header
        backgroundColor={COLORS.white}
        leftComponent={
          <BackButtonAndName
            name={Name}
            profile_picture={ProfilePicture}
            navigation={navigation}
          />
        }
        barStyle="dark-content"
        containerStyle={{
          backgroundColor: COLORS.white,
          borderBottomWidth: 0.75,
          borderBottomColor: COLORS.grey,
          alignItems: 'center',
          zIndex: 100,
        }}
      />
    </>
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
};

export default MessageBoxHeaderWrapper;
