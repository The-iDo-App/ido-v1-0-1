import React,{useState,useEffect} from 'react';
import { View, Text, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';
import COLORS from '../../src/consts/color';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import UploadProfile from '../../components/UploadProfilePic';
import { ScrollView } from 'react-native-gesture-handler';
import BioComponent from '../../components/Bio';
import InterestChips from '../../components/interestChips';
import AboutMe from '../../components/AboutMe';
import MyAnswers from '../../components/EvaluationMyselfChips';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';
import Loading from '../../components/ActivityIndicator';
const {width} = Dimensions.get('window');

export default function Profile({navigation}) {
  const [evalsInfo, setEvalsInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchUser = async()=>{
    const userId = await AsyncStorage.getItem("userId");
    const access_token = await AsyncStorage.getItem("access_token");

    const config = {
      headers: {
            "Content-type": "application/json",
            "Authorization": `${access_token}`,
      }
    }
    let user;
    try{
      user = await axios.post(`${BACKEND_BASEURL}/api/profiles`,{userId},config);
    }catch(err){
      console.log(err);
    }
    if(user.data.user){
      setUserInfo(user.data);
      setLoading(true);
    }
    // console.log(userInfo);
  }
  const fetchEvals = async()=>{
    const userId = await AsyncStorage.getItem("userId");
    let evals;
    try{
      evals = await axios.get(`${BACKEND_BASEURL}/api/evaluations/${userId}`);
      console.log(evals);
    }catch(err){
      console.log(err);
    }
    if(evals.data.questions){
      setEvalsInfo(evals.data);
    }
    // console.log(evalsInfo);
  }

  useEffect(() => {
    fetchUser();  
    fetchEvals();
  },[loading]);

  return (
    <>
      <HeaderWrapper />
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
          <ScrollView >
            {userInfo !== null && evalsInfo !== null?(<View style={{marginVertical: 20}} >
                {/*profile photo, name and city*/}
                <View style={style.contentWrapper} >
                    <View style={style.profilePhotoWrapper}  >
                        <UploadProfile />
                    </View>
                    <View style={style.nameWrapper} >
                        <Text style={style.nameText}>{userInfo.user.firstName}</Text>
                        <Text style={style.cityText}>{userInfo.user.address.city}</Text>
                    </View>
                </View>
                <BioComponent />
                <AboutMe about={userInfo.interest}/>
                <InterestChips interest={userInfo.interest}/>
                {/*Yung onPress prop ng MyAnswers ay mapupunta sa Question screen para magdagdag ng answers*/}
                <MyAnswers evaluation={evalsInfo}/>
            </View>)
          :(
              <Loading />
          )}
            
            
            
          </ScrollView>
        </SafeAreaView>
    </>
    
  );
}

//TODO: CHANGE BACKEND URL



const style = StyleSheet.create({
    contentWrapper: {
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: width/1.15,
       marginTop: 20
    },
    profilePhotoWrapper:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
      marginRight: 20
    },
    nameWrapper:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start', 
    },
    nameText:{
      fontSize: 30, 
      color: COLORS.blue, 
      fontWeight: '700'
    },
    cityText:{
      fontSize: 16, 
      color: COLORS.grey
    }

});