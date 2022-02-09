import React, {useState} from 'react';
import { View, Text, Dimensions,StyleSheet, Modal, Pressable, TextInput } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function BioComponent() {

    const [bioEditModal, setBioEditModal] = useState(false);
    const [bioText, setBioText] = useState("");



    const handleSaveButton = () => {
       setBioEditModal(false)
    }

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
                        <Text>{bioText}</Text>
                    </View>
            </View>
            <View style={style.centeredView}  >
                 <Modal
                    animationType="slide"
                    visible={bioEditModal}
                    transparent={true}
                    
                            
                 >
                    <View style={style.centeredView}>
                        <View style={style.modalView} >
                            <View style={style.modalHeader} >
                                <Text style={style.textStyle} >Edit bio</Text>
                                <Pressable onPress={()=>setBioEditModal(false)}>
                                        <Text style={style.textStyle} >&times;</Text>
                                </Pressable>
                            </View>
                            <View style={style.modalBody} >
                                    <TextInput 
                                        onChangeText={(text) => setBioText(text)}
                                        placeholder="Write your bio"
                                        value={bioText}
                                    />
                            </View>
                            <View style={style.modalFooter} >
                                        <Pressable  onPress={()=>setBioEditModal(false)}  style={style.closeBtn}>
                                                <Text style={style.btnTxt} >Close</Text>
                                        </Pressable>
                                        <Pressable style={style.saveBtn} onPress={handleSaveButton} >
                                                <Text  style={style.btnTxt} >Save</Text>
                                        </Pressable>
                            </View>
                        </View>
                         
                    </View>
                           
                    </Modal>
            </View>
           
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
        alignSelf: 'center', 
        flex: 1
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        padding: width/20,
        width: width - 40, 
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
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width/2, 
    marginVertical: width/2.5
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})