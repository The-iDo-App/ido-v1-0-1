import React from 'react';
import { View, Text, Modal, Pressable, ImageBackground,  StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import IdoChip from '../idoChip';

const {width, height} = Dimensions.get('window');


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
        height: 250,
        width: 250,
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



const ChipAbout = ({label, text}) => (
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
    <Text style={chipStyle.itemLabel}> {label} : </Text>
    <View style={{backgroundColor: COLORS.blue, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10}}  >
        <Text style={{color: COLORS.white}}  >{text}</Text>
    </View>
  </View>
)

export default function UserInfoModal({onPress, modalVisible}, props) {

  const {nickname, age, distance, matchRate, image, bio, city, interests, about, name, id} = props.User;

    

  // interests
  var sportItems = interests.sports; 
  var hobbyItems = interests.hobbies; 
  var musicItems = interests.musicGenre ;
  var filmItems = interests.filmGenre;
  var petItems = interests.pet; 
  var bookItems = interests.bookGenre; 
  var foodItems = interests.food; 

  //about
  var signItem = about.mySign;
  var politicalItem = about.political;
  var religionItem = about.religion;
  var smokingItem = about.smoking;
  var drinkingItem = about.drinking; 
  var kidsItem = about.kids;


  return (
     <Modal
          animationType="slide"
          visible={modalVisible}
          presentationStyle="fullScreen"
        >
               <View  style={style.modalHeader} >
                    <Text style={style.textStyle} >{nickname}'s profile</Text>
                    <Pressable onPress={onPress} >
                        <Text style={style.textStyle} >&times;</Text>
                    </Pressable>
               </View>  
                    
               <View style={style.modalBody} >
                  <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}  >
                      <View  style={style.imageWrapper}>
                          <ImageBackground source={image} resizeMode="contain" style={style.image}  />
                      </View>
                      <Text>{name}</Text>
                  </View>

                  <ScrollView scrollEnabled  contentContainerStyle={{ display: 'flex', flexGrow: 1 }} >
                      <View style={{marginVertical: 20, borderBottomColor: COLORS.grey, borderBottomWidth: 1, paddingVertical: 10}} >
                       {/*ABOUT ME*/}
                       <Text style={{color: COLORS.grey, fontSize: 18, fontWeight: 'bold'}}  >What about me</Text>
                        
                        {/*SIGN*/}
                        <ChipAbout label="Astrological Sign" text={signItem} />
                        {/*Political Stand*/}
                        <ChipAbout label="Political Stand" text={politicalItem} />
                        {/*Religion*/}
                        <ChipAbout label="Religion" text={religionItem} />
                        {/*Do I smoke?*/}
                        <ChipAbout label="Do I smoke?" text={smokingItem} />
                        {/*Do I drink?*/}
                        <ChipAbout label="Do I drink?" text={drinkingItem} />
                        {/*Do I want to have kids?*/}
                        <ChipAbout label="Do I want to have kids?" text={kidsItem} />
                     </View>
                       

                     <View style={{marginVertical: 20, paddingVertical: 10}}   >
                       {/*INTERESTS*/}

                       {/*SPORTS*/}
                       <Text style={{color: COLORS.grey, fontSize: 18, fontWeight: 'bold'}}  >I am interested in...</Text>
                        <View>
                          <Text style={chipStyle.itemLabel}  >Sports</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              sportItems.map((sport, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={sport} />
                                </React.Fragment>
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*HOBBIES*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Hobbies</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              hobbyItems.map((hobby, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={hobby} />
                                </React.Fragment>
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*MUSIC GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Music Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                               musicItems.map((music, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={music} />
                                </React.Fragment>
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*FILM GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Film Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              filmItems.map((film, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={film} />
                                </React.Fragment>
                              ))
                            }
                            </View>
                        </View>

                        {/*PET*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >My favorite pets</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              petItems.map((pet, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={pet} />
                                </React.Fragment>
                              ))
                            }
                            </View>
                        </View>
                        
                        {/*BOOK GENRE*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Book Genre</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              bookItems.map((book, index) => (
                                <React.Fragment key={index}>
                                   <IdoChip isProfile={false} text={book} />
                                </React.Fragment>
                               
                              ))
                            }
                            </View>
                        </View>

                        {/*FOOD*/}
                        <View>
                          <Text style={chipStyle.itemLabel}  >Favorite Food</Text>
                            <View style={chipStyle.itemWrapper} >
                            {
                              foodItems.map((foody, index) => (
                               <React.Fragment key={index}>
                                  <IdoChip isProfile={false} text={foody} />
                               </React.Fragment>
                                
                              ))
                            }
                            </View>
                        </View>
                     </View>
                       

                 </ScrollView>
                 

               </View>
        </Modal>
  );
}
