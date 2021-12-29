//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, LogBox  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import COLORS from '../../src/consts/color';
import Register from '../../src/styles/screens/registration';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import NextButton from '../../components/NextButton';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';


import Snackbar from '../../components/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height, fontScale, scale} = Dimensions.get("window");


const employmentList = [
    {key: 0, status: 'Student'},
    {key: 1,  status: 'Unemployed'},
    {key: 2,  status: 'Employed'},
    {key: 3,  status: 'Self-employed'},
]


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[Register.chips, backgroundColor, borderColor]}>
                <Text style={[Register.chipsText,color]}>{item.status}</Text>
            </View>
    </TouchableOpacity>
    )
}

// create a component
const EmploymentStatus = ({navigation}) => {
    const [message,setMessage] = useState("Input successfully saved!");
    const [selectStatus, setSelectStatus] = useState("");
    const [isSelected, setIsSelected] = useState(false);
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const handleSubmit = async() =>{
        let employment = null;
        if(employmentList[selectStatus])
            employment = employmentList[selectStatus].status;
        if(employment){
            setMessage("Input successfully saved!");
            await AsyncStorage.setItem("employment", employment);
            console.log(employment);
            // navigation.navigate('Preference');
        }else{
            setMessage("Please fill in the required fields.");
        }
        setvisibleToast(true);
        navigation.navigate('Preference');
    }



    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
            <HeaderWrapper />
            <View style={Register.container} >
                <TouchableOpacity onPress={()=> navigation.goBack()} >
                    <Text style={Register.label}  >Back</Text>
                </TouchableOpacity>
            </View>
            
                <Title Title="My employment status" />
                <Snackbar message={message} visibleToast={visibleToast}/>
                <View style={Register.sexualityWrapper} >
                    <FlatList 
                            scrollEnabled={false}
                            data={employmentList}
                            renderItem={({item}) => 
                            {
                                const backgroundColor = item.key === selectStatus ? COLORS.darkPink : COLORS.white;
                                const borderColor = item.key === selectStatus  ? COLORS.darkPink : COLORS.grey;  
                                const color = item.key === selectStatus  ? COLORS.white : COLORS.grey;      
                                return (
                                        <Item
                                        item={item}
                                        onPress={()=>setSelectStatus(item.key)}
                                        backgroundColor={{backgroundColor}}
                                        borderColor={{borderColor}}
                                        color={{color}}
                                        /> 
                                        )
                            }}
                            keyExtractor={item=> item.key.toString()}
                            style={{marginTop: 5, marginBottom: -10}}
                        />

                </View>
                <View style={{height: height/4.5}} />
                <View style={{flexDirection:  'row', alignItems: 'center', width: width - 50, alignSelf: 'center'}} >
                    <BouncyCheckbox iconStyle={{padding: 15}} fillColor={COLORS.darkPink} isChecked={isSelected} onPress={()=> setIsSelected(!isSelected)}  />
                    <Text style={{fontSize: 16/fontScale, color: COLORS.blue}}  >I agree to IDo's terms and conditions.</Text>
                </View>
        
                <NextButton TextButton="Submit" backgroundColor={isSelected === true ? COLORS.lightPink : '#ffcdcc'} disabled={isSelected === true ? false : true} onPress={()=>handleSubmit()} />
                <View style={{marginBottom: height/40}} />
            
        </SafeAreaView>
    );
};



//make this component available to the app
export default EmploymentStatus;
