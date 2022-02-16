import React from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';

const {width, height} = Dimensions.get('window')


export default function DeleteAccountModal({onPress, modalVisible}) {
  return (
     <>
         <Modal
                animationType="slide"
                visible={modalVisible}
                fullScreen
          >
                        <View style={style.modalHeader} >
                            <Text style={style.textStyle} >Delete Account</Text>
                            <Pressable onPress={onPress}>
                                <Text style={style.textStyle} >&times;</Text>
                            </Pressable>
                        </View>
                        <View style={style.modalBody} >
                               
                        </View>
                        <View style={style.modalFooter} >
                             <Pressable >
                                 <Text>DELETE ACCOUNT</Text>
                             </Pressable>
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
