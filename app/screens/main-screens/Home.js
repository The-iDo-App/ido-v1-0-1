import React, {useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, PanResponder, Animated,ActivityIndicator,TouchableOpacity } from 'react-native';
import COLORS from '../../src/consts/color';
import DatingCard from '../../components/DatingCard';
import HeaderWrapper from '../../components/Header';
import FakeUsers from '../../models/fakeUsers';
import UserInfoModal from '../../components/userInfoModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInfoModalVisible, setUserInfoModalVisible] = useState(false);
  const [users,setUsers] = useState([]);
  //drag
  const pan = new Animated.ValueXY();


  
  const panResponder = 
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (evt, gestureState) => {
        if(gestureState.dx > 120 ){
          Animated.spring(pan, {
            toValue: {x: width + 100, y: gestureState.dy},
            useNativeDriver: false
          }).start(() => {
            update();
            
          })
        }
        else if(gestureState.dx < -120){
          Animated.spring(pan, {
            toValue: {x: -width - 100, y: gestureState.dy},
            useNativeDriver: false
          }).start(() => {
            update();
            
          })
        }
        else{
          Animated.spring(pan, {
            toValue: {x: 0, y:0},
            friction: 2,
            useNativeDriver: false
          }).start()
        }
      },
    })
    
  const [pr, setPR] = useState(panResponder);
  
  const update = () => {
    setCurrentIndex(currentIndex + 1);
    return;
  }

  useEffect(() => {
    setPR(panResponder);
    pan.setValue({ x: 0, y: 0 });
  }, [currentIndex]);

  //tinder animation
  const rotate = pan.x.interpolate({
    inputRange: [-width/2, 0, width/ 2],
    outputRange: ['-10deg', '0deg', '10deg'], 
    extrapolate: 'clamp'
  })

  const rotateAndTranslate = {
    transform: [{
      rotate: rotate
    },
    ...pan.getTranslateTransform()
  ]
  }
  // like
  const likeOpacity = pan.x.interpolate({
    inputRange: [-width/2, 0, width / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
  })
  //nope
  const nopeOpacity = pan.x.interpolate({
    inputRange: [-width/2, 0, width / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp'
  })

  //next card
   const nextCardOpacity = pan.x.interpolate({
     inputRange: [-width/2, 0, width/2],
     outputRange: [1,0,1],
     extrapolate: 'clamp'
   })

   const nextCardScale = pan.x.interpolate({
     inputRange: [-width/2, 0, width/2],
     outputRange: [1,0.8,1],
     extrapolate: 'clamp'
   })

    const getBirthday = (bday)=>{
      let birthday = new Date(bday);  
      let ageDifMs = Date.now() - birthday.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

  const getUsers = async()=>{
      const access_token = await AsyncStorage.getItem("access_token");
      const userId = await AsyncStorage.getItem("userId");
      const config = {
        headers: {
              "Content-type": "application/json",
              "Authorization": `${access_token}`,
        },
      }
      let dbusers;
      try{
         dbusers = await axios.get(`${BACKEND_BASEURL}/api/profiles/${userId}`,config);
         setUsers(dbusers.data.users);
      }catch(err){
        console.log(err);
      }
  }
  
  useEffect(() => {
     getUsers();
  },[users]);
  
  return (
    < >
      <HeaderWrapper />
      <View style={styles.pageContainer}>
      {users !==null && currentIndex< users.length?(
        users.map((item, i) => {
          let name = `${item.userId.firstName} ${item.userId.lastName}`;
          let img = {uri:item.picture.blurredImage} || {uri:item.picture.avatar};
          if(i < currentIndex){
            return null;
          } 
          else if( i === currentIndex){
            return(
              <React.Fragment key={i}>
                  <Animated.View  style={[styles.animatedCard, rotateAndTranslate]}  {...panResponder.panHandlers} >
                      <View>
                          <Animated.View style={{transform: [{rotate: '30deg'}], position: 'absolute', top: 50, left: width/6.5, zIndex: 1000, elevation: 100, opacity: nopeOpacity}}  >
                            <Text style={{borderWidth: 2, borderColor: 'red', color: 'white', padding: 10, fontWeight: '800', fontSize: 30, backgroundColor: 'red'}} >NOPE</Text>
                          </Animated.View>
                          <Animated.View style={{transform: [{rotate: '-30deg'}], position: 'absolute', zIndex: 1000, top: 50, left: -width/2.5, elevation: 100, opacity: likeOpacity}}  >
                            <Text style={{borderWidth: 2, borderColor: 'green', color: 'white', padding: 10, fontWeight: '800', fontSize: 30, backgroundColor: 'green'}} >LIKE</Text>
                          </Animated.View>
                      </View>
                      <DatingCard 
                          id={item._id}
                          nickname={item.userId.username}
                          image={img}
                          bio={item.shortDescription}
                          city={item.userId.address.city}
                          age={getBirthday(item.userId.birthday)}
                          matchRate={"23%"}
                          onPress={() => {
                                setUserInfoModalVisible(true)
                                // console.log('button clicked')
                                }}  />
                  </Animated.View>
                  <UserInfoModal
                    name={name}
                    interests={item.interest}
                    about={item}
                    image={img}
                    interests={item.interest}
                    nickname={item.userId.username} 
                    modalVisible={userInfoModalVisible} 
                    onPress={() => setUserInfoModalVisible(false)} 
                  />
              </React.Fragment>
              
            );
          }
          else{
              return (
                <React.Fragment key={i}>
                  <Animated.View  style={[styles.animatedCard, {opacity: nextCardOpacity, transform: [{scale: nextCardScale}]}]}  >
                      <DatingCard 
                      id={item._id}
                      nickname={item.userId.username} 
                      image={img}
                      bio={item.bio}
                      city={item.userId.address.city}
                      age={getBirthday(item.userId.birthday)}
                      matchRate={"23%"}
                        onPress={() => {
                        setUserInfoModalVisible(true)
                        // console.log('button clicked')
                        }}  />
                  </Animated.View>
                </React.Fragment>
              )
          }
        }).reverse()
      ):(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal: 10}}>
            <Text>No users to match</Text>
            <ActivityIndicator size="large"  color="#FFC0CB"/>  
            <TouchableOpacity
              onPress={()=>setCurrentIndex(0)}
              style={{backgroundColor: "#DDDDDD",padding: 10}}
            >
              <Text>Reload</Text>
            </TouchableOpacity>
        </View>
      )}
      </View>
      
    </>
    
  );
}


const styles = StyleSheet.create({
  pageContainer: {
      flex: 1, 
      alignItems: 'center', 
      backgroundColor: COLORS.white,
      position: 'relative'
  }, 
  animatedCard: {
    width: width,
    height: width - 120,
    shadowColor: "#000000",
    shadowOffset: {	
        width: 0, 
        height: 1,},
    shadowOpacity: 1, 
    shadowRadius: 2.22,  
    alignItems: 'center', 
    elevation: 5,
    position: 'absolute',
    marginTop: 20
   
  }, 
 
});