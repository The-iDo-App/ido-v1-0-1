//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AgeRange from '../../components/InputRange';
import DistanceRange from '../../components/DistanceRange';

// create a component
const Preference = () => {
    return (
        <View>
             <AgeRange minValue={18} maxValue={65} initialValue={18} onChangeMin={(v)=>console.log(v)} onChangeMax={(v)=>console.log(v)}   />
             <DistanceRange />
        </View>
    );
};



//make this component available to the app
export default Preference;
