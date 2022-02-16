import React, {useState} from 'react';
import { View, Text, Dimensions,StyleSheet, Modal } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function BioComponent() {

    const [bioEditModal, setBioEditModal] = useState(false);


  return (
    <>  
            <View style={{marginHorizontal: 20, marginTop: 10 }}  >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}  >
                        <Text style={{fontSize: 20, marginRight: 5, color: COLORS.grey, fontWeight: '600'}} >Bio</Text>
                        <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
                        <TouchableOpacity onPress={() => setBioEditModal(true)} >
                            <FontAwesome name='edit' size={30}  style={{marginLeft: 5, color: COLORS.grey}} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>I love my life</Text>
                    </View>
            </View>
            <Modal
                    animationType="slide"
                    visible={bioEditModal}
            >
                    <View style={style.modalHeader} >
                         <Text style={style.textStyle} >Edit bio</Text>
                         <TouchableOpacity onPress={()=>setBioEditModal(false)}>
                                <Text style={style.textStyle} >&times;</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={style.modalBody} >

                    </View>
                    <View style={style.modalFooter} >

                    </View>
                    
            </Modal>
    </>
    
  );
}


const style = StyleSheet.create({
    modalHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center', 
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    modalBody:{
        display: 'flex',
        flexDirection: 'column',
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center'
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center',
        borderTopWidth: 1,
        borderColor: COLORS.grey, 
        
    },
    textStyle:{
        fontSize: width/20, 
        color: COLORS.blue, 
        fontWeight: '600'
    }, 
    closeBtn: {
        backgroundColor: COLORS.grey,
        width: width/2.5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40
    },
    saveBtn:{
        backgroundColor: COLORS.darkPink,
        width: width/2.5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40
    },
    btnTxt:{
        fontSize: width/25, 
        color: COLORS.white
    },
})