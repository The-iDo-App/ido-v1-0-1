//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const { width, fontScale } = Dimensions.get('window');

// create a component
const DistanceRange = ({ distanceValue, defaultValue }) => {
  const [distance, setDistance] = useState(100);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    distanceValue(distance);
  }, [distance]);

  useEffect(() => {
    if (defaultValue && isNew) setDistance(defaultValue);
  }, [defaultValue]);

  return (
    <View style={styles.rangeWrapper}>
      <Text style={styles.label}>
        {distance === 100 || distance < 1000
          ? distance + 'm'
          : (distance / 1000).toFixed(2) + 'km'}
      </Text>
      <Slider
        thumbStyle={{ height: 20, width: 20, backgroundColor: COLORS.blue }}
        value={distance}
        onValueChange={(value) => {
          setDistance(value);
          setIsNew(false);
        }}
        maximumValue={20000}
        minimumTrackTintColor={COLORS.blue}
        maximumTrackTintColor={COLORS.grey}
        minimumValue={100}
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
export default DistanceRange;
