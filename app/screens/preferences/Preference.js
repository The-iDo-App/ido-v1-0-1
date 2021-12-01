//import liraries
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text , Dimensions, LogBox} from 'react-native';
import AgeRange from '../../components/InputRange';
import DistanceRange from '../../components/DistanceRange';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWrapper from '../../components/Header';
import Title from '../../components/Title';
import NextButton from '../../components/NextButton';
import Register from '../../src/styles/screens/registration';
import COLORS from '../../src/consts/color';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';



const {width, height, fontScale} = Dimensions.get("window")


const screenGenderList = [
    {key: 0, gender: 'Women'},
    {key: 1,  gender: 'Men'},
    {key: 2,  gender: 'Everyone'},
]


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={[Register.chips, backgroundColor, borderColor]}>
                <Text style={[Register.chipsText,color]}>{item.gender}</Text>
            </View>
    </TouchableOpacity>
    )
}


// create a component
const Preference = ({navigation}) => {
    const [selectGender, setSelectGender] = useState("");

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
             <HeaderWrapper />
             <ScrollView>
             <Title Title="My Preferences" Description="Choose your preferred gender, age range and distance to see on the suggestion page. " />
             <View style={Register.sexualityWrapper} >
                <FlatList 
                            scrollEnabled={false}
                            data={screenGenderList}
                            renderItem={({item}) => {
                                const backgroundColor = item.key === selectGender ? COLORS.darkPink : COLORS.white;
                                const borderColor = item.key === selectGender  ? COLORS.darkPink : COLORS.grey;  
                                const color = item.key === selectGender  ? COLORS.white : COLORS.grey;      
                                return (
                                    <Item
                                    item={item}
                                    onPress={()=>setSelectGender(item.key)}
                                    backgroundColor={{backgroundColor}}
                                    borderColor={{borderColor}}
                                    color={{color}}
                                    /> 
                                )
                                }}
                            keyExtractor={item=> item.key.toString()}
                            style={{marginBottom: height/20}}
                        />
             </View>
             <View style={{flexDirection: 'row', width: width-80, alignSelf: 'center'}} >
                 <Text style={Register.labelText} >Age</Text>
             </View>
             <AgeRange minValue={18} maxValue={65} initialValue={18} onChangeMin={(v)=>console.log(v)} onChangeMax={(v)=>console.log(v)}   />
            <View style={{flexDirection: 'row', width: width-80, alignSelf: 'center'}}>
                 <Text style={Register.labelText}>Distance</Text>
             </View>
             <DistanceRange />
             </ScrollView>
             <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={() => navigation.navigate("Describe")} />
             <View style={{marginBottom: height/30}} />
        </SafeAreaView>
    );
};



//make this component available to the app
export default Preference;
