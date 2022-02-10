//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, LogBox } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import NextButton from '../../components/NextButton';
import HeaderWrapper from '../../components/Header';
import COLORS from '../../src/consts/color';
import SexOrientation from '../../models/Sexuality';
import Title from '../../components/Title';
import BackSkip from '../../components/BackSkip';
import Register from '../../src/styles/screens/registration';
import { ScrollView } from 'react-native-gesture-handler';


import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [orientation, setOrientation] = useState(null);

    const [message,setMessage] = useState("Input successfully saved!");
    const [visibleToast,setVisibleToast] = useState(false);
    useEffect(() => {setVisibleToast(false)}, [visibleToast]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    
    const handleSubmit = async() =>{
        if(orientation){
            setMessage("Input successfully saved!");
            await AsyncStorage.setItem('orientation', orientation);
            // console.log(orientation);
            navigation.navigate("Address");

        }else{
            setMessage("Please fill in the required fields.");
        }
        setVisibleToast(true);
        // navigation.navigate("Address");
    }

    const handleOrientation = (key,orientation) =>{                                               
        setSelectOrientation(key)
        setOrientation(orientation);
    }

    return (
        
     <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
         <HeaderWrapper />
         
         <BackSkip text={'Skip'} onBackPress={() => navigation.goBack()} onSkipPress={() => navigation.navigate("Address")} />
         
            <Title Title="I identify my sexuality" Description="Choose your sexual orientation" />
            <Snackbar message={message} visibleToast={visibleToast}/>
            
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
                                        onPress={()=>handleOrientation(item.key,item.orientation)}
                                        backgroundColor={{backgroundColor}}
                                        borderColor={{borderColor}}
                                        color={{color}}
                                    /> 
                                
                                        
                                        
                                        )
                                    }}
                            
                            keyExtractor={item=> item.key.toString()}
                        
                        />
            </View>
            
         
         <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={()=> handleSubmit()} />
     </SafeAreaView>
        
    );
};


//make this component available to the app
export default Sexuality;
