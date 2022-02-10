import React from 'react';
import { View, Text } from 'react-native';

export default function DeleteAccountModal({onPress}) {
  return (
     <>
         <Modal
                animationType="slide"
                visible={modalVisible}
            >
                        <View style={style.modalHeader} >
                            <Text style={style.textStyle} >Upload Photo or Avatar</Text>
                            <TouchableOpacity onPress={onPress}>
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
    imageWrapper:{
        width: 200, 
        height: 200,
        justifyContent: 'center',
        alignItems: 'center', 
        alignSelf: 'center', 
        margin: 10, 
        borderRadius: 100,
        borderWidth: 2, 
        borderColor: COLORS.blue,
        overflow: "hidden",
        
    },
    image:{
        height: 210,
        width: 210,
        margin: 0,
    }, 
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
    galleryWrapper:{
        width: width/4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
