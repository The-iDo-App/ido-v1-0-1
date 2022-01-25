//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-location';
import COLORS from '../../src/consts/color';


const {width, height, fontScale} = Dimensions.get('window')



const MultilineText = (props) => {
    return (
        <TextInput 
            {...props}
            editable
            placeholder="Address"
            placeholderTextColor={COLORS.grey}
            style={style.addressInputText}
        />
    )
}

// create a component
const EnableLocation = ({addressValue}) => {

    const [location, setLocation] = useState(null);
    const [userLocation, setUserLocation]= useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [textValue, textOnChangeText] = useState('');

    const enableLocation = async()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
        return;
        }
        
        try{
            let coords = await Location.getCurrentPositionAsync({});
            setTimeout(() => {
                 setUserLocation(coords); 
            }, 1000);
        }catch(err){
            throw err;
        }
        let codedLocation = null;
        try{
            if(userLocation)
                codedLocation =  await Location.reverseGeocodeAsync({latitude :  userLocation.coords.latitude,longitude :userLocation.coords.longitude}); 
            if(codedLocation){
                const address = {
                    country: codedLocation[0].country,
                    province: codedLocation[0].subregion,
                    city: codedLocation[0].city,
                    street: codedLocation[0].street,
                    postalCode: codedLocation[0].postalCode,
                    latitude: userLocation.coords.latitude,
                    longitude: userLocation.coords.longitude,
                }
                const currentLocation = `${address.street}, ${address.city}, ${address.province}, ${address.country}`;
                setLocation(currentLocation);
                addressValue(address);
            }

        }
        catch(err){
            console.log(err)
        } 
    }   
   

    return (
        <View>
            <View style={style.addressInputWrapper}  >
                <MultilineText 
                multiline
                numberOfLines={textValue === '' ? 1 : 3}
                value={location}
                                            
                />
            </View>
        
            
            <TouchableOpacity onPress={enableLocation}>
                <View style={style.locationButton}>
                       <Text style={{color: COLORS.blue, fontSize: 16, textAlign: 'center'}} >Enable Location</Text>
                </View>
             </TouchableOpacity>
        </View>
    );
};

// define your styles
const style = StyleSheet.create({
        addressInputWrapper:{
            borderBottomColor: COLORS.grey,
            borderBottomWidth: 1,
            width: (width-50),
            padding: fontScale * 12,
            alignSelf: 'center', 
            marginBottom: (height/40)
        },
       addressInputText:{
         fontSize: 18 / fontScale,
         color: COLORS.blue,
        },
        locationButton:{
            margin: 10, 
            padding: fontScale * 12, 
            borderColor: COLORS.blue, 
            borderWidth: 1, 
            width: width - 50, 
            borderRadius: (width-50)/2, 
            justifyContent: 'center', 
            alignItems: 'center',
            alignSelf: 'center'
        },
});

//make this component available to the app
export default EnableLocation;
