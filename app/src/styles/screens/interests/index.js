import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../consts/color";


const {width, height, scale, fontScale} = Dimensions.get("window"); 
const WIDTH = width - 50;


const interestStyles = StyleSheet.create({
    itemWrapper: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: WIDTH,  
        alignSelf: 'center',
        alignItems: 'center'
    },  
    item:{
        flex: 1, 
        flexDirection: 'row', 
        margin: 5,
        alignItems: 'center'
    },  
    text:{
        marginLeft: 10, 
        fontSize: 16/fontScale, 
        color: COLORS.grey
    }, 
    pageNum: {
        flexDirection: 'row',
        alignItems: 'center', 
        alignSelf: 'center' 
        
    }, 
    pageNumText: {
        fontSize: 18/fontScale, 
        color: COLORS.blue, 
        letterSpacing: 2,
    }, 
    pageNumTotal: {
        fontSize: 18/fontScale, 
        color: COLORS.grey, 
        letterSpacing: 2,
    }, 
    label: {
        textAlign: 'center', 
        alignSelf: 'center', 
        fontSize: 20/fontScale, 
        color: COLORS.blue, 
        fontWeight: '700', 
        marginVertical: 20
    }, 
    checkBox:{
        padding: 20/scale,
        borderRadius: 4,
    }
});

export default interestStyles