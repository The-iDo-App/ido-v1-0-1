//import liraries
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NextButton from '../../components/NextButton';
import HeaderWrapper from '../../components/Header';
import COLORS from '../../src/consts/color';
import SexOrientation from '../../models/Sexuality';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Register from '../../src/styles/screens/registration';

const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[Register.chips, backgroundColor, borderColor]}>
                <Text style={[Register.chipsText,color]}>{item.orientation}</Text>
            </View>
    </TouchableOpacity>
    )
}


// create a component
const Sexuality = ({navigation}) => {
    const [selectOrientation, setSelectOrientation] = useState("");
    return (
        
     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
         <HeaderWrapper />
         <BackSkip onBackPress={() => navigation.goBack()} onSkipPress={() => navigation.navigate("Address")} />
         <Title Title="I identify my sexuality" Description="Choose your sexual orientation" />
         <View style={Register.sexualityWrapper} > 
                <FlatList 
                        scrollEnabled={true}
                        data={SexOrientation}
                        renderItem={({item}) => {
                                                const backgroundColor = item.key === selectOrientation ? COLORS.darkPink : COLORS.white;
                                                const borderColor = item.key === selectOrientation ? COLORS.darkPink : COLORS.grey;  
                                                const color = item.key === selectOrientation ? COLORS.white : COLORS.grey;      
                                                return (
                                                       <Item
                                                        item={item}
                                                        onPress={()=>setSelectOrientation(item.key)}
                                                        backgroundColor={{backgroundColor}}
                                                        borderColor={{borderColor}}
                                                        color={{color}}
                                                       /> 
                                                
                                                        
                                                        
                                                        )
                                                    }}
                        
                        keyExtractor={item=> item.key.toString()}
                        style={{marginTop: 5, marginBottom: 9}}
                    />
         </View>
         <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=>navigation.navigate("Address")} />

     </SafeAreaView>
        
    );
};


//make this component available to the app
export default Sexuality;
