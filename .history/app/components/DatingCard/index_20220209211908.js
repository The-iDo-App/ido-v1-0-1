import React, {useState} from 'react';
import { View, Text, Dimensions, StyleSheet, ImageBackground, Modal, Platform, FlatList, Pressable, Image} from 'react-native';
import { TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import COLORS from '../../src/consts/color';
import IdoChip from '../idoChip';


const {width, height} = Dimensions.get('window');

export default function DatingCard(props) {

  const {nickname, age, distance, matchRate, image, bio, city, interests} = props.user;
  const [modalVisible, setModalVisible] = useState(false);



  // interests
  var sportItems = interests.sports; 
  var hobbyItems = interests.hobbies; 
  var musicItems = interests.musicGenre ;
  var filmItems = interests.filmGenre;
  var petItems = interests.pet; 
  var bookItems = interests.bookGenre; 
  var foodItems = interests.food; 

  
  
  return (
    <>
        <View style={cardStyle.cardWrapper} >
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
              <TouchableOpacity onPress={() => setModalVisible(true)}  >
                  <Text style={cardStyle.fullInfoTextStyle}  >SEE FULL INFO</Text>
              </TouchableOpacity>
          </View>
       </View>

        <Modal
          animationType="slide"
          visible={modalVisible}
          
        >
               <View  style={style.modalHeader} >
                    <Text style={style.textStyle} >{nickname}'s profile</Text>
                    <Pressable onPress={() => setModalVisible(false)} >
                        <Text style={style.textStyle} >&times;</Text>
                    </Pressable>
               </View>  
                    
               <View style={style.modalBody} >
                  <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}  >
                      <View  style={style.imageWrapper}>
                          <ImageBackground source={image} resizeMode="contain" style={style.image}  />
                      </View>
                      <Text>Nicolle Interior</Text>
                  </View>

                  <ScrollView scrollEnabled  contentContainerStyle={{ display: 'flex', flexGrow: 1 }} >
                      <View>
                       {/*ABOUT ME*/}
                       <Text style={{color: COLORS.grey, fontSize: 16, fontWeight: '700'}}  >What about me</Text>
                        
                     </View>
                       

                     <View>
                       {/*INTERESTS*/}

                       {/*SPORTS*/}
                       <Text style={{color: COLORS.grey, fontSize: 16, fontWeight: '700'}}  >I am interested in...</Text>
                        <View>
                          <Text style={chipStyle.itemLabel}  >Sports</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              sportItems.map((sport, key) => (
                                <IdoChip isProfile={false} text={sport} />
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*HOBBIES*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Hobbies</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              hobbyItems.map((hobby, key) => (
                                <IdoChip isProfile={false} text={hobby} />
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*MUSIC GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Music Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                               musicItems.map((music, key) => (
                                <IdoChip isProfile={false} text={music} />
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*FILM GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Film Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              filmItems.map((film, key) => (
                                <IdoChip isProfile={false} text={film} />
                              ))
                            }
                            </View>
                        </View>

                        {/*PET*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >My favorite pets</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              petItems.map((pet, key) => (
                                <IdoChip isProfile={false} text={pet} />
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*BOOK GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Book Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              bookItems.map((book, key) => (
                                <IdoChip isProfile={false} text={book} />
                              ))
                            }
                            </View>
                        </View>

                        {/*FOOD*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Favorite Food</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              foodItems.map((foody, key) => (
                                <IdoChip isProfile={false} text={foody} />
                              ))
                            }
                            </View>
                        </View>
                     </View>
                       

                 </ScrollView>
                 

               </View>
        </Modal>
    </>
        
  );
 

  
}


const chipStyle = StyleSheet.create({
  itemWrapper:{
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%',  
    flexWrap: 'wrap'
  },
  itemLabel: {
    color: COLORS.blue, 
    fontSize: 16, 
    fontWeight: '700',
    marginVertical: 10
  }
})





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
        height: 220,
        width: 200,
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
        alignSelf: 'center', 
        flex: 1
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
