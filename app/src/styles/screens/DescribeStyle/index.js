import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../consts/color";



const {width, scale, fontScale} = Dimensions.get("window");

const DescribeStyle = StyleSheet.create({
//describe me 
    bottomSheetHeader:{
        shadowColor: '#000', 
        shadowOffset: {
            width: -2, 
            height: -4,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#306575', 
        paddingTop: 20/scale, 
        
    }, 
    panelHeader: {
        backgroundColor: COLORS.white, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20/scale,
        padding: 10/scale,
        zIndex: 1,  
    }, 
    headerText:{
            fontSize: 18/fontScale,
            color: COLORS.blue,
            fontWeight: '700', 
            letterSpacing: 0.5,
    },
    labelContainer: {
        flexDirection: 'row', 
        width: width - 100
    },
    labelText:{
        color: COLORS.blue, 
        fontWeight: '700',
        fontSize: 18/fontScale
    },
    inputContainer: {
        alignSelf: 'center', 
        padding: 16/scale, 
        width: width - 50,
        marginVertical: 5
       
    }, 
    inputWrapper: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10 
    }, 
    input: {
        fontSize: 16/fontScale, 
        color: COLORS.blue, 
    },
    flatListWrapper: {
        paddingHorizontal: 40/scale,
        marginBottom: 10, 
        backgroundColor: COLORS.white, 
        
    }, 
    item: {
        marginVertical: 10,
    }, 
    itemText: {
        fontSize: 18/fontScale,
        color: '#334747'
    }
})

export default DescribeStyle;