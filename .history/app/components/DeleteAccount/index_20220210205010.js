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
                               <View style={style.galleryWrapper} >
                                   <TouchableOpacity  onPress={handlePhotoPicker} >
                                            <Icon 
                                                brand={true}
                                                name="image"
                                                color={COLORS.blue}
                                                size={width/4}
                                            />
                                   </TouchableOpacity>
                                    
                               </View>
                               <View style={style.galleryAvatar} >
                                   { /* //Issue: when id: 0 is pressed, error "Text component should come up with string" */}
                                            <FlatList
                                                    scrollEnabled={true}
                                                    data={formatData(AvatarList, numberColumns)}
                                                    renderItem={({item}) => {
                                                        const borderColor = item.id === photo ?  COLORS.darkPink : COLORS.grey; 
                                                        const borderWidth = item.id === photo  ?  2 : 2;
                                                        const icon = item.id === photo ? "check-circle" : null ;
                                                        if (item.empty){
                                                            return(
                                                                <View style={{display: 'none'}}></View>
                                                            )
                                                        }
                                                        return (
                                                            <Item 
                                                            item={item}
                                                            onPress={()=> handleSelectAvatar(item)}
                                                            icon={icon}
                                                            borderColor={{borderColor}}
                                                            borderWidth={{borderWidth}}
                                                            />
                                                        )
                                                    }}
                                                    keyExtractor={(item)=> item.id}
                                                    numColumns={numberColumns}
                                                    extraData={photo}
                                                />
                               </View>
                        </View>
                        <View style={style.modalFooter} >
                                <TouchableOpacity  onPress={()=>setModalVisible(!modalVisible)}   style={style.closeBtn}>
                                        <Text style={style.btnTxt} >Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.saveBtn} onPress={handleSaveButton} >
                                        <Text  style={style.btnTxt} >Save</Text>
                                </TouchableOpacity>
                        </View>
            </Modal>
     </>
  );
}
