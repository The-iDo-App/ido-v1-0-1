import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../src/consts/color';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_BASEURL } from '@env';
import Register from '../../src/styles/screens/registration';
import AgeRange from '../../components/InputRange';
import DistanceRange from '../../components/DistanceRange/index.js';

const { width, height } = Dimensions.get('window');

export default function UserPreferences({ name, email }) {
  const screenGenderList = [
    { key: 0, gender: 'Women' },
    { key: 1, gender: 'Men' },
    { key: 2, gender: 'Everyone' },
  ];

  const Item = ({ item, onPress, backgroundColor, borderColor, color }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[Register.chips, backgroundColor, borderColor]}>
          <Text style={[Register.chipsText, color]}>{item.gender}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [preferences, setPreferences] = useState({});

  useEffect(async () => {
    const userId = await AsyncStorage.getItem('userId');
    const accessToken = await AsyncStorage.getItem('access_token');

    let res = await axios.post(
      `${BACKEND_BASEURL}/api/profiles/`,
      {
        userId,
      },
      {
        headers: { authorization: accessToken },
      }
    );

    const { minAge, maxAge, minDistance, maxDistance, gender } =
      res.data.interest;
    setPreferences({ minAge, maxAge, minDistance, maxDistance, gender });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
        paddingHorizontal: 20,
      }}
    >
      <View style={Register.sexualityWrapper}>
        <FlatList
          scrollEnabled={false}
          data={screenGenderList}
          renderItem={({ item }) => {
            const backgroundColor =
              item.gender === preferences.gender
                ? COLORS.darkPink
                : COLORS.white;
            const borderColor =
              item.gender === preferences.gender
                ? COLORS.darkPink
                : COLORS.grey;
            const color =
              item.gender === preferences.gender ? COLORS.white : COLORS.grey;
            return (
              <Item
                item={item}
                onPress={() =>
                  setPreferences({ ...preferences, gender: item.gender })
                }
                backgroundColor={{ backgroundColor }}
                borderColor={{ borderColor }}
                color={{ color }}
              />
            );
          }}
          keyExtractor={(item) => item.key.toString()}
          style={{ marginBottom: height / 20 }}
        />
      </View>
      <View
        style={{ flexDirection: 'row', width: width - 80, alignSelf: 'center' }}
      >
        <Text style={Register.labelText}>Age</Text>
      </View>
      <AgeRange
        ageValue={(value) => console.log(value)}
        defaultValue={preferences.maxAge}
      />
      <View
        style={{ flexDirection: 'row', width: width - 80, alignSelf: 'center' }}
      >
        <Text style={Register.labelText}>Distance</Text>
      </View>
      <DistanceRange
        distanceValue={(value) => console.log(value)}
        defaultValue={preferences.maxDistance}
      />
    </View>
  );
}

//Dagdag na lang ng iba pang Identity Set (Name, age, email etc.)
