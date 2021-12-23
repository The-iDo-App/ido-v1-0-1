//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';

const {width, fontScale} = Dimensions.get("window");

// create a component
const BackSkip = ({onBackPress, onSkipPress, text}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onBackPress}>
                <Text style={styles.label}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSkipPress} >
                <Text style={styles.label}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection:  'row', 
        width: width - 50,
        alignSelf: 'center'
    },
    label: {
        color: COLORS.grey, 
        fontSize: 16/fontScale,
    }
});

//make this component available to the app
export default BackSkip;

