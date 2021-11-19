//import liraries
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SwitchSelector from "react-native-switch-selector";

import COLORS from '../../src/consts/color';


const {width} = Dimensions.get('window');

// create a component
const GenderBio = () => {
    //state
    const [gender, setGender] = useState("");

        // gender
    const switchGender = (gender) => {
        setGender({gender: gender});
    }
    
    return (
        <View>
                   <SwitchSelector 
                        style={style.selector}
                        textColor = {COLORS.white}
                        textStyle={{fontSize: (width-20)/20, fontWeight: '700' }}
                        selectedTextStyle= {{fontSize: (width-20)/20, fontWeight: '700' }}
                        buttonColor = {COLORS.darkPink}
                        selectedColor={COLORS.white}
                        backgroundColor={COLORS.grey}
                        borderRadius = {(width-20)/2}
                        initial={0}
                        onPress={(value) => switchGender(value)}
                        options={[
                                {label: "Woman", value:"woman"},
                                {label: "Man", value: "man"}
                                ]}
                                    
                    />
        </View>
    );
};

// define your styles
const style = StyleSheet.create({
    selector:{
        width: width-50,
        alignSelf: 'center', 
        margin: 5, 
        borderWidth: 2,
        borderRadius: (width-20)/2,
        borderColor: COLORS.grey, 
        
    }
})

//make this component available to the app
export default GenderBio;
