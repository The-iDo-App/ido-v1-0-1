import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import IdoChip from '../idoChip';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';
import MyFakeData from '../../models/MyData';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';

const {width} = Dimensions.get('window');

const ChipAbout = ({label, text}) => (
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
    <Text style={chipStyle.itemLabel}> {label} </Text>
    {text !== undefined?(  
    <View style={{backgroundColor: COLORS.blue, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10}}  >
        <Text style={{color: COLORS.white}}  >{text}</Text>
    </View>):(
      <Text></Text>
    )  
  }
  
  </View>
)

export default function MyAnswers({onPress, evaluation}) {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10, flex: 1, justifyContent: 'center' }}  >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}  >
             <Text style={{fontSize: 20,  color: COLORS.grey, fontWeight: '600'}} >Evaluate myself</Text>
             <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
             <TouchableOpacity onPress={onPress} >
                    <FontAwesome name='edit' size={30}  style={{ color: COLORS.grey}} />
             </TouchableOpacity>
        </View>
        <View style={{ borderColor: COLORS.grey, borderWidth: 0.5, borderStyle: 'solid', borderRadius: 10, flex: 1, paddingHorizontal: 10, paddingVertical: 20, width: width-40, marginTop: 20}} >
               {
                //  console.log(evaluation)
                  evaluation.questions.map((item, i) => (
                     <React.Fragment key={i}  >
                        <ChipAbout  label={item}/>
                        <ChipAbout text={evaluation.answers[i]?.slice(3)} />
                     </React.Fragment>
                  ))
               }
        </View>
     </View>
  );
}

const chipStyle = StyleSheet.create({
  itemWrapper:{
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%',  
    flexWrap: 'wrap'
  },
  itemLabel: {
    color: COLORS.blue, 
    fontSize: 16, 
    fontWeight: '700',
    marginVertical: 10
  }
})
