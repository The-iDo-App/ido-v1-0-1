import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../consts/color";


const {width, fontScale} = Dimensions.get("window");

const WIDTH = width - 50; 

const Register = StyleSheet.create({
    formWrapper:{flex:1,width: WIDTH, marginTop: 20, alignSelf: 'center'},
   labelWrapper:{flexDirection: 'row',marginTop: 20},
   inputWrapper:{ flexDirection: 'row', justifyContent: 'space-between'},
   nameWrapper:{width: WIDTH/2.15, justifyContent: 'space-between'},
   inputTextWrapper:{borderBottomColor: COLORS.grey, borderBottomWidth: 0.5},
   labelText:{color: COLORS.blue, fontSize:18,},
   underText:{color: COLORS.blue, fontSize:12, fontWeight: '300', opacity: 0.6},
   inputText:{fontSize: 18, color: COLORS.blue,},
   sexualityWrapper:{width: WIDTH, justifyContent:  'center', alignItems: 'center', alignSelf: 'center'},
   sexualityWrapperBigText:{
       color: COLORS.grey,
        fontSize: 20,
        fontWeight: '600',},
   sexualityWrapperSmallText:{
       marginTop: 10,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        color: COLORS.grey,
        opacity: 0.6
   },
   chips:{
       width:  350,
       justifyContent: 'center',
       alignItems: 'center',
       borderWidth: 1,
       borderRadius: 100,
       padding: 12, 
       margin: 5,
       
   },
   chipsText:{
       textAlign: 'center',
       fontSize: 16
   },
    container: {
        justifyContent: 'space-between',
        flexDirection:  'row', 
        width: width - 50,
        alignSelf: 'center'
    },
    label: {
        color: COLORS.grey, 
        fontSize: 16/fontScale,
    }
});

export default Register