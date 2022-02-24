//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { width, fontScale } = Dimensions.get('window');

// create a component
const AgeRange = ({ ageValue, defaultValue }) => {
  const [age, setAge] = useState(18);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    ageValue(age);
  }, [age]);

  useEffect(() => {
    if (defaultValue && isNew) setAge(defaultValue);
  }, [defaultValue]);

  return (
    <View style={styles.rangeWrapper}>
      <Text style={styles.label}>18 - {age} Years Old</Text>
      <Slider
        thumbStyle={{ height: 20, width: 20, backgroundColor: COLORS.blue }}
        value={age}
        onValueChange={(value) => {
          setAge(value);
          setIsNew(false);
        }}
        minimumValue={18}
        maximumValue={65}
        minimumTrackTintColor={COLORS.blue}
        maximumTrackTintColor={COLORS.grey}
        step={1}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  rangeWrapper: {
    width: width - 80,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16 / fontScale,
    color: COLORS.grey,
  },
});

//make this component available to the app
export default AgeRange;
