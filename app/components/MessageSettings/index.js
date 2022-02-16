import React from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, Pressable , TouchableOpacity, FlatList, TextInput} from 'react-native';
import COLORS from '../../src/consts/color';
import Register from '../../src/styles/screens/registration';
import {MaterialIcons} from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')

const Item =({item, onPress, styling}) => {
    return(
    <TouchableOpacity onPress={onPress}>
            <View style={{paddingVertical: 20, width: width, borderBottomColor: COLORS.grey, borderBottomWidth: 0.5, paddingHorizontal: 30}} >
                <Text style={ styling ? style.itemTextStyle : style.mItemTextStyle} >{item}</Text>
            </View>
    </TouchableOpacity>
    )
}

export default function MessageSettingsModal({goBackFunction ,parentModalVisible,  blockUserFunction, reportUserFunction, leaveConversation  }) {

  return (
     <>
         <Modal
                
                animationType="slide"
                visible={parentModalVisible}
                presentationStyle="fullScreen"
          >
                        <View style={style.modalHeader} >
                            <Pressable onPress={goBackFunction} >
                                    <MaterialIcons name='chevron-left' size={40} />
                            </Pressable>
                            
                        </View>
                        <View style={style.modalBody} >
                            <Item item="Block User" styling={true} onPress={blockUserFunction} />
                            <Item item="Report User" styling={true} onPress={reportUserFunction} />
                            <Item item="Leave User" styling={false} onPress={leaveConversation} />    
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
        padding: width/30,
        alignSelf: 'center', 
        flex: 1
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center',
    },
    textStyle:{
        fontSize: width/20, 
        color: COLORS.blue, 
        fontWeight: '600'
    }, 
    saveBtn:{
        backgroundColor: COLORS.darkPink,
        width: width - 40, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40, 
    },
    btnTxt:{
        fontSize: width/25, 
        color: COLORS.white
    },
    itemTextStyle:{
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: '700'
    },
    mItemTextStyle:{
        color: COLORS.darkPink,
        fontSize: 18,
        fontWeight: '700'
    }
    
})


