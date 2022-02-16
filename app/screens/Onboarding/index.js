import React, {useRef, useState, useEffect,useContext} from 'react';
import { View, Text, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../src/consts/color';
import {AntDesign} from '@expo/vector-icons';
import OnboardingList from '../../models/Onboarding';
import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';



const {width, scale, height} = Dimensions.get('window');


export default function Onboarding({navigation}) {
  const hasUnsavedChanges = Boolean(true);
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }),
    [navigation, hasUnsavedChanges]
  );

  const flatListRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);


  const handleViewableItemChanged = useRef(({viewableItems})=> {
      setViewableItems(viewableItems);

  });


  useEffect(() => {
    if(!viewableItems[0] || currentPage === viewableItems[0].index) 
        return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems])

  const handleNext = () => {
    if(currentPage === OnboardingList.length-1)
     return; 
    
    console.log(currentPage);
    flatListRef.current.scrollToIndex({
        animated: true, 
        index: currentPage + 1
    })
  }

  const handleBack = () => {
        if(currentPage === 0) 
            return; 
        
        flatListRef.current.scrollToIndex({
            animated: true, 
            index: currentPage -1 
        })
  }

  const handleSkipToEnd = () => {
        flatListRef.current.scrollToIndex({
            animated: true, 
            index: OnboardingList.length - 1
        })
  }


  const renderTopSection = () => {
        return(
            <SafeAreaView>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, width: width, marginVertical: 20 }}>
                    {/*Back Button*/}
                        <TouchableOpacity onPress={handleBack}  >
                            {/*Back Icon*/}
                            <AntDesign name="left" style={{fontSize: 25, color: COLORS.blue, opacity: currentPage === 0 ? 0 : 1}} />
                        </TouchableOpacity>
                    {/*Skip Button*/}
                        <TouchableOpacity  onPress={handleSkipToEnd} >
                            <Text style={{fontSize: 20, color: COLORS.blue, opacity: currentPage === OnboardingList.length -1 ? 0 : 1}}>Skip</Text>
                        </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
  }

   const {signIn} = useContext(AuthContext);
   const handleSignIn = async()=>{
       const token = await AsyncStorage.getItem("access_token");
       const user = await AsyncStorage.getItem("username");
       signIn(user,token);
   }
   const renderBottomSection = () => {
      return(
          <SafeAreaView>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 20,  width: width }}>
                    {/*Pagination*/}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}   >
                        {
                            //No. of dots
                            [...Array(OnboardingList.length)].map((_, index) => (
                                    <View key={index} style={{width: 10, height: 10, borderRadius: 5, backgroundColor: index === currentPage ? COLORS.blue : '#C4C4C4', marginRight: 5}} />
                            ))
                        }
                        
                    </View>
                    {/*Next or GetStarted Button*/}
                    {
                        currentPage != OnboardingList.length - 1 ? (
                                <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.blue}} onPress={handleNext}  >
                                        <AntDesign name="right" style={{fontSize: 25, color: COLORS.white, opacity: 1}}  />
                                </TouchableOpacity>
                        ): 
                        (
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 180, height: 60, borderRadius: 30, backgroundColor: COLORS.blue, paddingHorizontal: 20}} onPress={()=>handleSignIn()}>
                                 <Text style={{fontSize: 20, color: COLORS.white, opacity: 1}} >Get started</Text>
                                 <AntDesign name="right" style={{fontSize: 20, color: COLORS.white, opacity: 1}}  />
                            </TouchableOpacity>
                        )
                    }
                    
              </View>
          </SafeAreaView>
      )
  }

  const renderFlatList = ({item}) => {
      return (
          <View style={{width: width, flex: 2, alignItems: 'center', justifyContent: 'center'}}  >
                <View style={{alignItems: 'center', marginVertical: 10/height}} >
                    <ImageBackground source={item.image} style={{width: width/1, height: height/scale}}  resizeMode='contain'  />
                </View>
                <View style={{paddingHorizontal: 20/scale, marginVertical:20/height}}  >
                    <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: COLORS.blue}}  >{item.title}</Text>
                    <Text style={{fontSize: 16, textAlign: 'center', fontWeight: '300', color: COLORS.grey, lineHeight: 25}}  >{item.description}</Text>
                </View>
          </View>
      )
  }

  return (
    <SafeAreaView  style={{flex: 1, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center'}} >
        <StatusBar />

        {/*TOP SECTION - Back & Skip Button*/}
        {renderTopSection()}

        {/*FLAT LIST with pages*/}
        <FlatList
            data={OnboardingList}
            keyExtractor={item => item._id}
            renderItem={renderFlatList}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            onViewableItemsChanged={handleViewableItemChanged.current}
            viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
            initialNumToRender={1}
            extraData={width}
            style={{flex:1}}
        />
        {/*BOTTOM SECTION - pagination & next or GetStarted Button*/}
        {renderBottomSection()}


    </SafeAreaView>
  );
}
