//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';


const {width, height, fontScale} = Dimensions.get("window");

// create a component
const Title = ({Title, Description}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{Title}</Text>
            <Text style={styles.description}  >{Description}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center', 
      marginVertical: 20,
      width: width -50, 
      alignSelf: 'center'
    },
    title: {
        color: COLORS.grey, 
        fontSize: 22/fontScale, 
        fontWeight: '700', 
        marginVertical: 5
    }, 
    description: {
        color: COLORS.grey, 
        fontSize: 16/fontScale, 
        fontWeight: '300', 
        marginVertical: 5, 
        textAlign: 'center'
    }
});

//make this component available to the app
export default Title;
