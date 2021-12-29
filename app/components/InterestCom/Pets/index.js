import React, { useReducer, useState, useEffect} from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import COLORS from '../../../src/consts/color';
import PetList from '../../../models/Pets';
import interestStyles from '../../../src/styles/screens/interests';


const {width, scale, height} = Dimensions.get("window")
const WIDTH = width - 50;


// create a component
const Pets = ({petsValue}) => {
   const [selectedItems, setSelectedItems] = useState([]);
    const [toggle, setToggle] = useState(false)
    const maxSelections = 5; 
    
    useEffect(() => {
        petsValue(selectedItems);
        // console.log(selectedItems);
    }, [selectedItems])

    const handlePress = (item)=>{
        setToggle(!toggle);
        if(selectedItems.includes(item)){
            setSelectedItems(selectedItems.filter(items=> items !== item));
        }else{
           setSelectedItems(oldItems=> [...oldItems,item]);
        }
    }


    const renderItem = ({item, selected}) => {
                   
        
        return(
           <View style={interestStyles.item} >
               {
                   
                    (
                        <BouncyCheckbox 
                            onPress={() => handlePress(item.pet)}
                            fillColor={COLORS.darkPink}
                            onChange ={() => handlePress(item.pet)}
                            size={60/scale}
                            iconStyle={{width: WIDTH/12, height: height/30}}
                            isChecked={toggle}
                            disableText
                        />
                    )
                    
                   
               }
                
                <Text style={interestStyles.text}>{item.pet}</Text>
                
            </View>
        )
      }
    
    

    return (
       
        <View style={{flex: 1}} >

            <Text style={interestStyles.label}  >FAVORITE PET</Text>

            <View style={interestStyles.itemWrapper} >

                <FlatList
                    data={PetList}
                    keyExtractor={item => item.key.toString()}
                    renderItem={renderItem}
                    style={{width:width}}
                />
            </View>
                <View style={interestStyles.pageNum} >
                    <Text style={interestStyles.pageNumText} >5</Text><Text style={interestStyles.pageNumTotal} >/7</Text>
                </View>

        </View>

    ); 
       
};



//make this component available to the app
export default Pets;
