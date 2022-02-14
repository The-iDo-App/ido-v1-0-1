import React,{useContext} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingList from '../../../models/SettingList';


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


  const res = Object.values(SettingList).map(value => {
    return value;
  });


  return (
    <>
     <HeaderWrapper />
      <SafeAreaView style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <View style={{flex: 1}}>

        {
              res.map((item, index) => {}
              (
                <React.Fragment key={index} >
                    <ItemSettings  label={item.label} />
                </React.Fragment>
              ))
        }
       




        
          <TouchableOpacity onPress={()=>signOut()}>
              <Text style={{width:100,height:100,backgroundColor:'red', textAlign:'center'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
    
     
  );
}
