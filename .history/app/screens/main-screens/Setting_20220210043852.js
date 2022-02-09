import React,{useContext} from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import COLORS from '../../src/consts/color';
import { AuthContext } from '../../components/context';
import HeaderWrapper from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings({navigation}) {
  const {signOut} = useContext(AuthContext);
  return (
    <>
    
      <SafeAreaView style={{flex: 1}}  >
        
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white}}>
          <Text>Settings</Text>
          <TouchableOpacity onPress={()=>signOut()}>
              <Text style={{width:100,height:100,backgroundColor:'red', textAlign:'center'}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
    
     
  );
}
