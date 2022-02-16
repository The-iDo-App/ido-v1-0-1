import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function BioComponent() {
  return (
    <>  
            <View style={{marginHorizontal: 20, marginTop: 10 }}  >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}  >
                        <Text style={{fontSize: 20, marginRight: 5, color: COLORS.grey, fontWeight: '600'}} >Bio</Text>
                        <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
                        <TouchableOpacity>
                            <FontAwesome name='edit' size={30}  style={{marginLeft: 5, color: COLORS.grey}} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>I love my life</Text>
                    </View>
            </View>
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
