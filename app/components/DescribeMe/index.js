//import liraries
import React, {useCallback, useRef, useState, useMemo, useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, LogBox } from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider, BottomSheetBackground} from '@gorhom/bottom-sheet';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import COLORS from '../../src/consts/color';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import DescribeStyle from '../../src/styles/screens/DescribeStyle';

//dataLists
import AstrologicalSign from '../../models/Astrological';
import PoliticalViews from '../../models/PolitcalViews';
import Religion from '../../models/Religion'; 
import SmokeList from '../../models/Smoking';
import DrinkingHabit from '../../models/DrinkingHabits';
import WantKidsList from '../../models/WantKids';
import { SafeAreaView } from 'react-native-safe-area-context';
import NextButton from '../NextButton';

// issue: lag 


const Item = ({ label, onPress }) => (
    <View style={DescribeStyle.item} >
        <TouchableOpacity onPress={onPress}   >
            <Text style={DescribeStyle.itemText}>{label}</Text>
        </TouchableOpacity>
    </View>
)



const {fontScale} = Dimensions.get("window")

// create a component
const DescribeMe = ({onPress,astValue,relValue,polValue,drinkValue,smokeValue,kidsValue}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    const [astrologicalSign, setAstrologicalSign] = useState(null);
    const [religion, setReligion] = useState(null);
    const [politicalView, setPoliticalView] = useState(null);
    const [drinks, setDrinks] = useState(null);
    const [smoke, setSmoke] = useState(null);
    const [wantKids, setWantKids] = useState(null);

    // const astrologicalSign 
    // const religion
    // const politicalView
    // const drinks
    // const smoke
    // const wantKids


    //refs
    const signBSModalRef = useRef(null); //AstrologicalSignRef
    const politicalBSModalRef = useRef(null);    //PoliticalViewRef
    const faithBSModalRef = useRef(null); //ReligionRef
    const smokeBSModalRef = useRef(null);    //SmokeRef
    const drinkBSModalRef = useRef(null); //DrinkRef
    const kidsBSModalRef = useRef(null);    //KidsRef

    //snapPoints
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const smallSnapPoints = useMemo(() => ['20%',  '40%'], []);

    // callbacks for open modals
    const signHandlePress = useCallback(() => {
        signBSModalRef.current?.present();
       
    }, []);

    const politicalHandlePress = useCallback(() => {
        politicalBSModalRef.current?.present();
        
    }, [])

    const faithHandlePress = useCallback(() => {
        faithBSModalRef.current?.present();
        
    }, []);

    const smokeHandlePress = useCallback(() => {
        smokeBSModalRef.current?.present();
       
    }, [])

    const drinkHandlePress = useCallback(() => {
        drinkBSModalRef.current?.present();
        
    }, []);

    const kidsHandlePress = useCallback(() => {
        kidsBSModalRef.current?.present();
        
        
    }, [])


    //callbacks
    const signHandleSheetChanges = useCallback((index) => {
        console.log('signHandleSheetChanges', index);
    }, []);

    const politicalHandleSheetChanges = useCallback((index) => {
        console.log('politicalHandleSheetChanges', index);
    }, []);

    const faithHandleSheetChanges = useCallback((index) => {
        console.log('faithHandleSheetChanges', index);
    }, []);

    const smokeHandleSheetChanges = useCallback((index) => {
        console.log('smokeHandleSheetChanges', index);
    }, []);

    const drinkHandleSheetChanges = useCallback((index) => {
        console.log('drinkHandleSheetChanges', index);
    }, []);

    const kidsHandleSheetChanges = useCallback((index) => {
        console.log('kidsHandleSheetChanges', index);
    }, []);


    // onPress functions for each item in each ref when clicked, the BS modal dismiss and also the item selected will be displayed in the TextInput
    const signDismissModal = (item) => {
        setAstrologicalSign(item);
        astValue(item);
        console.log(item);
        signBSModalRef.current?.dismiss();
    }

    const politicalDismissModal = (item) => {
        setPoliticalView(item);
        polValue(item);
        console.log(item);
        politicalBSModalRef.current?.dismiss();
    }

    const faithDismissModal = (item) => {
        setReligion(item);
        relValue(item);
        console.log(item);
        faithBSModalRef.current?.dismiss();
    }

    const smokeDismissModal = (item) => {
        setSmoke(item);
        smokeValue(item);
        console.log(item);
        smokeBSModalRef.current?.dismiss();
    }

    const drinkDismissModal = (item) => {
        setDrinks(item);
        drinkValue(item);
        console.log(item);
        drinkBSModalRef.current?.dismiss();
    }

    const kidsDismissModal = (item) => {
        setWantKids(item);
        kidsValue(item);
        console.log(item);
        kidsBSModalRef.current?.dismiss();
    }

  

   
    // render items

    const signRenderItem = ({item}) => (
        <Item label={item.sign} onPress={()=>signDismissModal(item.sign)}  />
    )     
     
    const politicalRenderItem = ({item}) => (
        <Item label={item.view} onPress={()=>politicalDismissModal(item.view)}  />
    )

    const faithRenderItem = ({item}) => (
        <Item label={item.belief} onPress={()=>faithDismissModal(item.belief)}  />
    )

    const smokeRenderItem = ({item}) => (
        <Item label={item.smoke} onPress={()=>smokeDismissModal(item.smoke)}  />
    )

    const drinkRenderItem = ({item}) => (
        <Item label={item.habit} onPress={()=>drinkDismissModal(item.habit)}  />
    )

    const kidsRenderItem = ({item}) => (
        <Item label={item.want} onPress={()=>kidsDismissModal(item.want)}  />
    )
    
   
    


    return (
        <>
            <BottomSheetModalProvider>
                <ScrollView>
                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >1. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >What is your astrological sign?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your astrological sign" style={DescribeStyle.input} value={astrologicalSign}/>
                            <TouchableOpacity onPress={signHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>
                
                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >2. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >What is your political view?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your political view" style={DescribeStyle.input} value={politicalView}/>
                            <TouchableOpacity onPress={politicalHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>

                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >3. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >What is your religion?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your religion" style={DescribeStyle.input} value={religion}/>
                            <TouchableOpacity onPress={faithHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>
                
                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >4. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >Do you often smoke?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} value={smoke}/>
                            <TouchableOpacity onPress={smokeHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>
                
                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >5. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >How often you drink alcoholic beverages?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} value={drinks}/>
                            <TouchableOpacity onPress={drinkHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>

                <View style={DescribeStyle.inputContainer}  >
                    <View style={DescribeStyle.labelContainer} >
                            <Text style={DescribeStyle.labelText}  >6. &nbsp;</Text> 
                            <Text style={DescribeStyle.labelText}  >Do you want kids?</Text>
                    </View>
                    <View style={DescribeStyle.inputWrapper}  >
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} value={wantKids}/>
                            <TouchableOpacity onPress={kidsHandlePress}>
                                <Icon type="font-awesome" name="angle-down" color={COLORS.blue} size={30/fontScale} />
                            </TouchableOpacity>
                    </View>
                    <View style={{height: 1.5, backgroundColor: COLORS.grey }}  />
                </View>
                
                </ScrollView>

                <NextButton TextButton="Next" backgroundColor={COLORS.lightPink} onPress={onPress} />
                

                <BottomSheetModal
                            name="signModal"
                            ref={signBSModalRef}
                            index={1}
                            snapPoints={snapPoints}
                            onChange={signHandleSheetChanges}
                            backdropComponent={BottomSheetBackdrop}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                            stackBehavior="replace"
                            

                >
                   <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
                        
                            <View style={DescribeStyle.panelHeader} >
                                <Text style={DescribeStyle.headerText} >Astrological Signs</Text>
                            </View>
                            
                            <ScrollView style={DescribeStyle.flatListWrapper} >
                                    <FlatList
                                        data={AstrologicalSign}
                                        keyExtractor={item=>item.key}
                                        renderItem={signRenderItem}
                                        scrollEnabled={false}
                                        scrollToOverflowEnabled
                                    />
                                    
                            </ScrollView>
                            

                        
                   </SafeAreaView>
                   
                </BottomSheetModal>
                
                <BottomSheetModal
                            name="politicalModal"
                            ref={politicalBSModalRef}
                            index={1}
                            snapPoints={smallSnapPoints}
                            onChange={politicalHandleSheetChanges}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                            backdropComponent={BottomSheetBackdrop}
                            stackBehavior="replace"
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                          
                >
                    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}} >
                        <View style={DescribeStyle.panelHeader} >
                            <Text style={DescribeStyle.headerText}  >Political View</Text>
                        </View>
                        
                        <ScrollView style={DescribeStyle.flatListWrapper} >
                            <FlatList
                                data={PoliticalViews}
                                renderItem={politicalRenderItem}
                                keyExtractor={item => item.key}
                                scrollEnabled={false}
                                scrollToOverflowEnabled
                            />
                        </ScrollView>
                    </SafeAreaView>
                </BottomSheetModal>
                
                <BottomSheetModal
                            name="religionModal"
                            ref={faithBSModalRef}
                            index={1}
                            snapPoints={snapPoints}
                            onChange={faithHandleSheetChanges}
                            backdropComponent={BottomSheetBackdrop}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                            stackBehavior="replace"
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                >
                    
                    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
                        
                            <View style={DescribeStyle.panelHeader} >
                                <Text style={DescribeStyle.headerText}>Religion</Text>
                            </View>

                            <ScrollView style={DescribeStyle.flatListWrapper} > 
                                <View>
                                    <FlatList
                                        data={Religion}
                                        renderItem={faithRenderItem}
                                        keyExtractor={item => item.key}
                                        scrollToOverflowEnabled
                                        scrollEnabled={false}
                                    />
                                </View>
                            </ScrollView>
                
                       
                    </SafeAreaView>   

                    
                </BottomSheetModal>
                
                <BottomSheetModal
                            name="smokeModal"
                            ref={smokeBSModalRef}
                            index={1}
                            snapPoints={smallSnapPoints}
                            onChange={smokeHandleSheetChanges}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                            backdropComponent={BottomSheetBackdrop}
                            stackBehavior="replace"
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                          
                >
                    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}} >
                        <View style={DescribeStyle.panelHeader} >
                            <Text style={DescribeStyle.headerText}  >Smoking Habit</Text>
                        </View>
                        <ScrollView style={DescribeStyle.flatListWrapper} >
                            <FlatList
                                data={SmokeList}
                                renderItem={smokeRenderItem}
                                keyExtractor={item => item.key}
                                scrollEnabled={false}
                                scrollToOverflowEnabled
                            />
                        </ScrollView>
                        

                    </SafeAreaView>
                </BottomSheetModal>

                <BottomSheetModal
                            name="drinkModal"
                            ref={drinkBSModalRef}
                            index={1}
                            snapPoints={smallSnapPoints}
                            onChange={drinkHandleSheetChanges}
                            backdropComponent={BottomSheetBackdrop}
                            stackBehavior="replace"
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                >
                    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}} >
                         <View style={DescribeStyle.panelHeader} >
                            <Text style={DescribeStyle.headerText}  >Drinking Habit</Text>
                        </View>
                        
                        <ScrollView style={DescribeStyle.flatListWrapper} >
                                <FlatList
                                    data={DrinkingHabit}
                                    renderItem={drinkRenderItem}
                                    keyExtractor={item => item.key}
                                    scrollEnabled={false}
                                    scrollToOverflowEnabled
                                />

                        </ScrollView>

                        
                    </SafeAreaView>
                </BottomSheetModal>
                
                <BottomSheetModal
                            name="kidsModal"
                            ref={kidsBSModalRef}
                            index={1}
                            snapPoints={smallSnapPoints}
                            onChange={kidsHandleSheetChanges}
                            enablePanDownToClose
                            enableContentPanningGesture={false}
                            backdropComponent={BottomSheetBackdrop}
                            stackBehavior="replace"
                            handleStyle={DescribeStyle.bottomSheetHeader}
                            handleIndicatorStyle={{backgroundColor: COLORS.white}}
                          
                >
                    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white, zIndex: 10}} >
                        <View style={DescribeStyle.panelHeader} >
                            <Text style={DescribeStyle.headerText}  >Want or Not?</Text>
                        </View>
                        <ScrollView style={DescribeStyle.flatListWrapper} >
                            <FlatList
                                    data={WantKidsList}
                                    renderItem={kidsRenderItem}
                                    keyExtractor={item => item.key}
                                    scrollEnabled={false}
                                    scrollToOverflowEnabled
                                    
                            />
                        </ScrollView>
                        

                    </SafeAreaView>
                </BottomSheetModal>

            </BottomSheetModalProvider>

               
            
        </>
        
    );
};

//make this component available to the app
export default DescribeMe;
