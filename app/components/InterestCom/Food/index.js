import React, { useReducer, useState, useEffect} from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import COLORS from '../../../src/consts/color';
import FoodList from '../../../models/Food';
import interestStyles from '../../../src/styles/screens/interests';


const {width, scale, height} = Dimensions.get("window")
const WIDTH = width - 50;


// create a component
const Food = ({foodValue}) => {
   const [selectedItems, setSelectedItems] = useState([]);
    const [toggle, setToggle] = useState(false)
    const maxSelections = 5; 
    
    useEffect(() => {
        foodValue(selectedItems);
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
                            onPress={() => handlePress(item.foodie)}
                            fillColor={COLORS.darkPink}
                            onChange ={() => handlePress(item.foodie)}
                            size={60/scale}
                            iconStyle={{width: WIDTH/12, height: height/30}}
                            isChecked={toggle}
                            disableText
                        />
                    )
                    
                   
               }
                
                <Text style={interestStyles.text}>{item.foodie}</Text>
                
            </View>
        )
      }
    
    

    return (
       
        <View style={{flex: 1}} >

            <Text style={interestStyles.label}  >FAVORITE FOODS</Text>

            <View style={interestStyles.itemWrapper} >

                <FlatList
                    data={FoodList}
                    keyExtractor={item => item.key.toString()}
                    renderItem={renderItem}
                    style={{width:width}}
                />
            </View>
                <View style={interestStyles.pageNum} >
                    <Text style={interestStyles.pageNumText} >7</Text><Text style={interestStyles.pageNumTotal} >/7</Text>
                </View>

        </View>

    ); 
       
};



//make this component available to the app
export default Food;
