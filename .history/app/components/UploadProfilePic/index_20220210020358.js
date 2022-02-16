
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Modal, Platform, FlatList } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import * as ImagePicker from 'expo-image-picker'
import {FontAwesome} from '@expo/vector-icons';
import COLORS from '../../src/consts/color';
import AvatarList from '../../models/Avatar';
import axios from 'axios';
import mime from 'mime';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

//For the responsiveness of the website
const {width, height} = Dimensions.get('window');


//Flatlist items

const numberColumns = 3;

const Item =({item, onPress, borderColor, borderWidth, icon}) => {
    //Issue: when id: 0 is pressed, error "Text component should come up with string"

    return(
    <TouchableOpacity onPress={onPress}>
            
            <View style={[style.avatarItemStyle, borderColor, borderWidth]}>
            
                    <Image source={item.avatar} style={style.avatarImage}/>
                    <FontAwesome name={icon} size={20} style={{position:"absolute", top: 0, left: 0, color: "green"}}/>
            </View>
    </TouchableOpacity>
    )

}




// create a component
const UploadProfile = () => {
    //States
    const [modalVisible, setModalVisible] = useState(false);
    const [photo, setPhoto] = useState(null);

    const [uri, setUri] = useState(null);
    const [src, setSrc] = useState(null);

    useEffect(() => {
            (async () => {
                if(Platform.OS !== 'web'){
                    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (!granted){
                        alert('Sorry, we need camera roll permissions to make this work!');
                    }
                }
            })();
    }, [])

    const uploadPicture = async(imageUri) =>{
        // console.log(BACKEND_DEVURL);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
             }
        }
        const newImageUri =  "file:///" + imageUri.split("file:/").join("");
        const formData = new FormData();
        formData.append('image', {
            uri : newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop()
        });
        const response = await axios.post(`${BACKEND_BASEURL}/api/registers/uploadImage`,formData, config);
        console.log(response.data);
        if(response.data){
            await AsyncStorage.setItem('blurredImage', response.data.blurredImage);
            await AsyncStorage.setItem('originalImage', response.data.originalImage);
            const avat = await AsyncStorage.getItem('avatar');
            if(avat)
              await AsyncStorage.removeItem('avatar');
        }
    }

    const handlePhotoPicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true, 
            aspect: [1, 1], 
            quality: 1,
        });

        // console.log(result);


        if (!result.cancelled){
            uploadPicture(result.uri);
            setUri(result.uri);
            setSrc(null);
            setModalVisible(!modalVisible);
        }

    }

    const handleSaveButton = () => {
        // code goes here for displaying the selected avatar in Image component
        setModalVisible(!modalVisible);
    }

    //avatar
      const formatData = (avatarList, numberColumns) => {
                const totalRows =Math.floor(avatarList.length /numberColumns);
                let totalLastRow = avatarList.length - (totalRows * numberColumns);

                while(totalLastRow !== 0 && totalLastRow !== numberColumns){
                    avatarList.push({key: 'blank', empty: true});
                    totalLastRow++;
                }

                return avatarList;
        }
    const handleSelectAvatar = async(item) =>{
        setSrc(item.avatar);
        if(item.avatar){
            await AsyncStorage.setItem('avatar', String(item.avatar));
            await AsyncStorage.removeItem('originalImage');
            await AsyncStorage.removeItem('blurredImage');
        }
        setUri(null);
        setPhoto(item.id)
    }

    return (
        <>
            <View  style={style.imageWrapper}>
                <TouchableOpacity onPress={()=>setModalVisible(true)} >
                    {
                        uri ?
                            (<Image source={{uri}} resizeMode="contain" style={style.image}  />) 
                        :src 
                            ?  (<Image source={src} resizeMode="contain" style={style.image}  />) 
                        : (<Image source={require('../../src/assets/default.png')} resizeMode="contain" style={style.image}  />) 
                    }
                        
                </TouchableOpacity>
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
};



const style = StyleSheet.create({
    imageWrapper:{
        width:  150, 
        height:  150,
        justifyContent: 'center',
        alignItems: 'center',  
        margin: 10, 
        borderRadius:75,
        borderWidth: 2, 
        borderColor: COLORS.blue,
        overflow: "hidden",
        
    },
    image:{
        height: 160,
        width: 160,
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
    galleryAvatar:{
        height: height/1.65,
    },
    avatarItemStyle:{
       flex:1,
       flexDirection: 'row',
       margin: 5,
       justifyContent: 'center',
       alignItems: 'center'
       
   },
   avatarImage:{
        width: width/4,
        height: height/8,
   },

})


//make this component available to the app
export default UploadProfile;

//TODO: display ung selected avatar to Image