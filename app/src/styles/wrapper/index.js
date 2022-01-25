import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../consts/color";


const {width} = Dimensions.get("window");

const WIDTH = width - 80; 

const wrapper = StyleSheet.create({
    mobileWrapper:{
        paddingHorizontal: 20, 
    }
});