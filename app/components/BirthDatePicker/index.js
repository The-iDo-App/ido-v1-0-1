//import liraries
import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FontAwesome} from '@expo/vector-icons';
import COLORS from '../../src/consts/color';


const {scale, width} = Dimensions.get("window");


// create a component
const BirthDatePicker = () => {
    const [birthDate, setBirthDate] = useState("MM / DD / YYYY");
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = (tempDate.getMonth() + 1) + " " + '/' + tempDate.getDate()  + " "  + '/' + tempDate.getFullYear();

        setBirthDate(fDate);

        

        
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View>
            <View style={style.birthdateWrapper}>
                                 <Text style={style.inputText}>{birthDate}</Text>
                                 <TouchableOpacity onPress={showDatepicker}>
                                     <FontAwesome name="calendar" color={COLORS.blue} size={scale*10}  />
                                 </TouchableOpacity>
                                   
                             </View>
                              {show && (
                                    <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    display="calendar"
                                    onChange={onChange}
                                    maximumDate={new Date(2003, 12, 31)}
                                    themeVariant="light"
                                    
                                    />
                                )
                                //Cancel and confirm button not showing up
                                }
           
        </View>
    );
};

// define your styles
const style = StyleSheet.create({
       inputText:{
           fontSize: scale*7, 
           color: COLORS.blue,
        },
       birthdateWrapper:{
           flexDirection: 'row', 
           justifyContent: 'space-between', 
           borderBottomWidth: 0.85, 
           borderBottomColor: COLORS.grey, 
           alignItems: 'center', 
           margin: scale*2, 
           padding: scale*4,
           width: width - 50, 
           alignSelf: 'center'
        },

})

//make this component available to the app
export default BirthDatePicker;
