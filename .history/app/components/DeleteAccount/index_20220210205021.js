import React from 'react';
import { View, Text } from 'react-native';

export default function DeleteAccountModal() {
  return (
     <>
         <Modal
                animationType="slide"
                visible={modalVisible}
            >
                        <View style={style.modalHeader} >
                            <Text style={style.textStyle} >Upload Photo or Avatar</Text>
                            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
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
