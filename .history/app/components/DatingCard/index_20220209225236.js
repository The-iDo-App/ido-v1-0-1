import React, {useState} from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground, Modal, Platform, FlatList, Pressable, Image} from 'react-native';
import { TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import COLORS from '../../src/consts/color';
import IdoChip from '../idoChip';




const {width, height} = Dimensions.get('window');

export default function DatingCard({nickname, age, distance, matchRate, image, bio, city, interests, about, name, id}) {


  return (
    <>
        <View style={cardStyle.cardWrapper}key={id} >
          <View style={cardStyle.imageWrapper}>
            <ImageBackground source={image}  style={cardStyle.image}>
                <View style={cardStyle.matchRateWrapper}  >
                    <Text style={cardStyle.matchRateText}  >{matchRate}</Text>
                </View>
            </ImageBackground>
          </View>
          
          <View style={cardStyle.row1Wrapper}  >
              <View style={cardStyle.row2Wrapper}  >
                <Text style={cardStyle.nameTextStyle} >{nickname},</Text>
                <Text style={cardStyle.ageTextStyle}  >{age}</Text>
              </View>
              <View>
                <Text style={cardStyle.distanceTextStyle}  >{distance}</Text>
              </View>
          </View>
          <View style={cardStyle.rowWrapper}>
              <View  >
                  <Text style={cardStyle.cityTextStyle}   >{city}</Text>
              </View>
              <View  >
                  <Text style={cardStyle.bioTextStyle}   >"{bio}"</Text>
              </View>
              <TouchableOpacity onPress={onPress}  >
                  <Text style={cardStyle.fullInfoTextStyle}  >SEE FULL INFO</Text>
              </TouchableOpacity>
          </View>
       </View>

       
    </>
        
  );
 

  
}






const cardStyle = StyleSheet.create({
  cardWrapper: {
      backgroundColor: 'white', 
      width: width-40, 
      height: height - (width/1.5),  
      borderRadius: 20, 
      elevation: 3, 

      
  }, 
  imageWrapper:{
    width: width-40, 
    height: height - (width), 
    position: 'relative', 
    justifyContent: 'center', 
    overflow: 'hidden' ,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image:{
      flex: 1, 
      height: null, 
      width: null, 
      resizeMode: 'cover'
  },
  matchRateWrapper:{
      flex: 1, 
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      padding: 20,
  },
  matchRateText:{
      fontSize: 20,  
      backgroundColor: COLORS.darkPink, 
      paddingVertical: 16, 
      paddingHorizontal: 12,  
      textAlign: 'center', 
      borderRadius: height, 
      color: COLORS.white, 
      fontWeight: '600', 
      
  },
  rowWrapper:{
    justifyContent: 'space-between',
    width: width - 60,
    marginTop: 10,
    marginHorizontal: 10
  },
  row1Wrapper:{
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: width - 60,
    marginHorizontal: 10
  },
  nameTextStyle:{
    color: COLORS.blue,
    fontSize: 20, 
    fontWeight: '700'
  },
  ageTextStyle:{
    color: COLORS.grey,
    fontSize: 16, 
    fontWeight: '600'
  },
  row2Wrapper:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  distanceTextStyle:{
    color: COLORS.blue,
    fontSize: 16, 
    fontWeight: '600'
  },
  bioTextStyle:{
     textAlign:'left',
     color: COLORS.grey,
     fontSize: 16, 
     fontWeight: '600'
  },
  fullInfoTextStyle:{
     textAlign:'left',
     color: COLORS.darkPink,
     fontSize: 16, 
     fontWeight: '600',
      marginTop: 10
  },
   cityTextStyle:{
     textAlign:'left',
     color: COLORS.grey,
     fontSize: 14, 
     fontWeight: '400'
  },

})
