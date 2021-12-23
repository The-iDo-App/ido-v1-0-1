//import liraries
import React, {useCallback, useRef, useState, useMemo, useEffect} from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, LogBox } from 'react-native';
import Animated from 'react-native-reanimated';
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
const DescribeMe = ({onPress}) => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])


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
    const signHandleSheetChanges = useCallback((index: number) => {
        console.log('signHandleSheetChanges', index);
    }, []);

    const politicalHandleSheetChanges = useCallback((index: number) => {
        console.log('politicalHandleSheetChanges', index);
    }, []);

    const faithHandleSheetChanges = useCallback((index: number) => {
        console.log('faithHandleSheetChanges', index);
    }, []);

    const smokeHandleSheetChanges = useCallback((index: number) => {
        console.log('smokeHandleSheetChanges', index);
    }, []);

    const drinkHandleSheetChanges = useCallback((index: number) => {
        console.log('drinkHandleSheetChanges', index);
    }, []);

    const kidsHandleSheetChanges = useCallback((index: number) => {
        console.log('kidsHandleSheetChanges', index);
    }, []);


    // onPress functions for each item in each ref when clicked, the BS modal dismiss and also the item selected will be displayed in the TextInput
    const signDismissModal = () => {
        signBSModalRef.current?.dismiss();
    }

    const politicalDismissModal = () => {
        politicalBSModalRef.current?.dismiss();
    }

    const faithDismissModal = () => {
        faithBSModalRef.current?.dismiss();
    }

    const smokeDismissModal = () => {
        smokeBSModalRef.current?.dismiss();
    }

    const drinkDismissModal = () => {
        drinkBSModalRef.current?.dismiss();
    }

    const kidsDismissModal = () => {
        kidsBSModalRef.current?.dismiss();
    }



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
                            <TextInput editable={false} placeholder="Choose your astrological sign" style={DescribeStyle.input} />
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
                            <TextInput editable={false} placeholder="Choose your political view" style={DescribeStyle.input} />
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
                            <TextInput editable={false} placeholder="Choose your religion" style={DescribeStyle.input} />
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
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} />
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
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} />
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
                            <TextInput editable={false} placeholder="Choose your answer" style={DescribeStyle.input} />
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
                                   {
                                        AstrologicalSign.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={signDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.sign}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
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
                                   {
                                        PoliticalViews.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={politicalDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.view}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
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
                                   {
                                        Religion.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={faithDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.belief}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
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
                                   {
                                        SmokeList.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={smokeDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.smoke}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
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
                                   {
                                        DrinkingHabit.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={drinkDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.habit}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
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
                                   {
                                        WantKidsList.map((item) =>(
                                        <View style={DescribeStyle.item} key={item.key} >
                                            <TouchableOpacity onPress={kidsDismissModal}   >
                                                <Text style={DescribeStyle.itemText}>{item.want}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ))

                                   }
                            </ScrollView>
                        

                    </SafeAreaView>
                </BottomSheetModal>

            </BottomSheetModalProvider>

               
            
        </>
        
    );
};

//make this component available to the app
export default DescribeMe;

//TODO: display ung selected item from bottomsheet to TextInput
