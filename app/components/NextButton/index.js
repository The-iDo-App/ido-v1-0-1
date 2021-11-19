//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import COLORS from '../../src/consts/color';


const {width, fontScale} = Dimensions.get("window");

const WIDTH = width - 50; 


// create a component
const NextButton = ({onPress, TextButton, disabled, backgroundColor}) => {
    return (
        
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <View style={[styles.button, {backgroundColor: backgroundColor}]} >
                <Text style={styles.TextButton} >{TextButton}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    button:{
        width: WIDTH, 
        alignSelf:'center', 
        padding: fontScale * 12, 
        alignItems:'center', 
        borderRadius: (width-50)/2, 
        margin: 10, 
        
    },
    TextButton:{
        color: COLORS.white,
        fontSize: 18 / fontScale,
    }
});

//make this component available to the app
export default NextButton;
