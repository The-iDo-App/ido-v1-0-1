import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import HeaderStyle from '../../src/styles/header';
import { Header } from 'react-native-elements';
import COLORS from '../../src/consts/color';

const {height} = Dimensions.get("window");

const Logo = () => 
{
    return (
    <View style={{display:'flex', alignItems: 'center'}} >
        <Image source={require('../../src/assets/adaptive-icon.png')} resizeMode="contain" style={HeaderStyle.logo} />
    </View> 
    )
}



const HeaderWrapper = () => {
    return (
        <>
            <Header
        
                backgroundColor={COLORS.white}
                leftComponent={<Logo />}
                barStyle='dark-content'
                containerStyle={{backgroundColor: COLORS.white, borderBottomWidth: 0.75, borderBottomColor: COLORS.grey, alignItems: 'center', zIndex: 100}}
            />
        </>
    );
};



export default HeaderWrapper;
