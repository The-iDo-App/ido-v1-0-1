import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../../consts/color";


const {width, height, scale, fontScale} = Dimensions.get("window");

const WIDTH = width - 50; 

const AuthenticationStyle = StyleSheet.create({
    authWrapper: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingVertical: 40/scale,
        paddingHorizontal: 20,
        alignItems: 'center',
        height: 'auto',
    
    },
    logoWrapper: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height/10
    },
    logo: {
        width: WIDTH/2,
        height:WIDTH/2,
       
    },
    textWrapper:{
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textText: {
        fontSize: 18/fontScale,
        color: '#889999',
        textAlign: 'center',
    },
    action:{
        marginVertical: 10,
        flexDirection: 'row',
        alignItems:'center',
        borderBottomWidth: 1,
        width: WIDTH,
        borderBottomColor: COLORS.grey,
    },
    textInput: {
        width: WIDTH-40,
        color: COLORS.blue,
        fontSize: 16/fontScale,
        padding: 16/scale,
    },
    forgotWrap:{
        width: WIDTH,
        marginTop: 20,
    },
    forgotText:{
        color: COLORS.lightPink,
        fontSize: 16/fontScale,
    },
    loginBtn:{
        backgroundColor: COLORS.blue,
        padding: 14,
        borderRadius: WIDTH/2,
        width: WIDTH, 
        height: 50, 
        alignItems: 'center', 
        marginTop: 40
    },
    loginText:{
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 17/fontScale,
        
    },
    orWrap:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    line1:{
        height: 0.5,
        width: WIDTH/4,
        backgroundColor: COLORS.grey,
    },
    orText:{
        color: COLORS.grey,
    },
    line2:{
        height: 0.5,
        width: WIDTH/4,
        backgroundColor: COLORS.grey,
    },
    authenticationWrap: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:WIDTH/2,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    fbBtn:{
        backgroundColor: '#E0E0E0',
        height: 60,
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 100
    },
    googleBtn : {
         backgroundColor: '#E0E0E0',
        height: 60,
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 100
    },
    noAccountWrap:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
    },
    noAccountText:{
        color: COLORS.grey,
        fontSize: 16/fontScale,
    },
    noAccountLink:{
        color: COLORS.lightPink,
        fontSize: 16/fontScale,
    },
    errorMsg:{
        color: COLORS.red,
        fontSize: 12/fontScale,
    },
});

export default AuthenticationStyle