import React from 'react';
import { View, Text , Pressable, StyleSheet, Modal, Dimensions} from 'react-native';
import COLORS from '../../src/consts/color';

const {width, height} = Dimensions.get('window');

export default function ConfirmationModal({visible, cancel, okay, header, body, close}) {
  return (
    <Modal
        animationType="fade"
        visible={visible}
        transparent={true}
    >
        <View style={smallStyle.anotherView}>
            <View style={smallStyle.modalView}>
                <View style={smallStyle.modalHeader}>
                    <Text style={smallStyle.textStyle}>{header}</Text>
                    <Pressable onPress={close}>
                        <Text style={smallStyle.textStyle}>&times;</Text>
                    </Pressable>
                </View>
                <View style={smallStyle.modalBody}>
                    {body}
                </View>
                <View style={smallStyle.modalFooter}>
                    <Pressable style={smallStyle.cancelBtn} onPress={cancel} >
                        <Text style={smallStyle.btnTxt}>CANCEL</Text>
                    </Pressable>
                    <Pressable style={smallStyle.saveBtn} onPress={okay} >
                        <Text style={smallStyle.btnTxt}>OKAY</Text>
                    </Pressable>
                </View>
            </View>

        </View>

    </Modal>
  );
}


const smallStyle = StyleSheet.create({
    modalHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 40, 
        alignSelf: 'center', 
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    modalBody:{
        display: 'flex',
        flexDirection: 'column',
        padding: width/20,
        width: width - 30, 
        alignSelf: 'center', 
        flex: 1
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 30, 
        alignSelf: 'center',
       
    },
    textStyle:{
        fontSize: width/20, 
        color: COLORS.blue, 
        fontWeight: '600'
    }, 
    saveBtn:{
        backgroundColor: COLORS.darkPink,
        width: width - 280, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40,
       
    },
    cancelBtn:{
        backgroundColor: COLORS.grey,
        width: width - 280, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40,
       
    },
    btnTxt:{
        fontSize: width/25, 
        color: COLORS.white
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width/2, 
    marginVertical: width/2,
   
  },
  anotherView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:  'rgba(0, 0, 0, 0.4)'
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width/1.05,
    height: width/1.35
  },
  inputTextStyle: {
      borderColor: COLORS.grey, 
      borderWidth: 1, 
      padding: 16, 
      borderRadius: 10, 
      marginTop: 10, 
      color: COLORS.blue,
      fontSize: 16
    },
})