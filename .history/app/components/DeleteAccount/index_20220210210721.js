import React from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';
import Register from '../../src/styles/screens/registration';

const {width, height} = Dimensions.get('window')

const REASONS = [
    {key: 0, orientation: 'I am wasting my leisure hours'},
    {key: 1, orientation: 'I am not having fun'},
    {key: 2, orientation: 'I met someone'},
    {key: 3, orientation: 'Dating in real life is still a thing'},
    {key: 4, orientation: "It's starting to get out of control"},
    {key: 5, orientation: 'I kept meeting the wrong person'},
    {key: 6, orientation: 'Online dating is emotionally consuming'},
]

// sauce: https://afterdefeat.wordpress.com/2015/07/06/the-7-reasons-i-deleted-my-online-dating-profiles/


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <Pressable onPress={onPress}>
            <View style={[Register.chips, backgroundColor, borderColor]}>
                <Text style={[Register.chipsText,color]}>{item}</Text>
            </View>
    </Pressable>
    )
}


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
                            {
                                REASONS.map((reason, index) => {

                                    return(
                                        <React.Fragment key={index} >
                                            <Item item={reason} />
                                        </React.Fragment>
                                    )
                                })
                            }
                               
                        </View>
                        <View style={style.modalFooter} >
                             <Pressable style={style.saveBtn} >
                                 <Text style={style.btnTxt} >DELETE ACCOUNT</Text>
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
    
})
