import React from 'react';
import { View, Text, Modal, Pressable, ImageBackground } from 'react-native';
import COLORS from '../../src/consts/color';
import IdoChip from '../idoChip';







const ChipAbout = ({label, text}) => (
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
    <Text style={chipStyle.itemLabel}> {label} : </Text>
    <View style={{backgroundColor: COLORS.blue, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10}}  >
        <Text style={{color: COLORS.white}}  >{text}</Text>
    </View>
  </View>
)

export default function UserInfoModal() {
  return (
     <Modal
          animationType="none"
          visible={modalVisible}
          presentationStyle="fullScreen"
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
