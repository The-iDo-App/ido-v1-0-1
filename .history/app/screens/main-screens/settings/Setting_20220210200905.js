import React,{useContext} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SETTINGS_LIST from '../../../models/SettingList';


const ItemSettings = ({onPress, label}) => {
    return(
      <View>
        <TouchableOpacity onPress={onPress} >
          <Text>{label}</Text>
        </TouchableOpacity>
      </View>
    )
}




export default function Settings({navigation}) {
  const {signOut} = useContext(AuthContext);
  return (
    <>
     <HeaderWrapper />
      <SafeAreaView style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <View style={{flex: 1}}>

        {
            SETTINGS_LIST.map((set, i) => (
              <
            ))
        }
        <ItemSettings />




        
          <TouchableOpacity onPress={()=>signOut()}>
              <Text style={{width:100,height:100,backgroundColor:'red', textAlign:'center'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
    
     
  );
}
