import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import IdoChip from '../idoChip';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';
import MyFakeData from '../../models/MyData';

const {width} = Dimensions.get('window');

const ChipAbout = ({label, text}) => (
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
    <Text style={chipStyle.itemLabel}> {label} : </Text>
    <View style={{backgroundColor: COLORS.blue, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10}}  >
        <Text style={{color: COLORS.white}}  >{text}</Text>
    </View>
  </View>
)

export default function AboutMe() {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10, flex: 1, justifyContent: 'center' }}  >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}  >
             <Text style={{fontSize: 20,  color: COLORS.grey, fontWeight: '600'}} >About me</Text>
             <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
        </View>
        <View style={{ borderColor: COLORS.grey, borderWidth: 0.5, borderStyle: 'solid', borderRadius: 10, flex: 1, paddingHorizontal: 10, paddingVertical: 20, width: width-40, marginTop: 20}} >
               {
                   MyFakeData.map((item, i) => (
                       <React.Fragment>
                           <ChipAbout  label="Astrological Sign"  text={} />
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
