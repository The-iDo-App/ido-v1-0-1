import React,{useContext} from 'react';
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../../src/consts/color';
import { AuthContext } from '../../../components/context';
import HeaderWrapper from '../../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingList from '../../../models/SettingList';
import SettingList2 from '../../../models/SettingListT';


const ItemSettings = ({onPress, label}) => {
    return(
      <View style={styling.settingItemWrapper}  > 
        <TouchableOpacity onPress={onPress} >
          <Text style={styling.settingItemText}  >{label}</Text>
        </TouchableOpacity>
      </View>
    )
}




export default function Settings({navigation}) {
  const {signOut} = useContext(AuthContext);


  const res = Object.values(SettingList).map(value => {
    return value;
  });

  const res2 = Object.values(SettingList2).map(value => {
    return value;
  });

  return (
    <>
     <HeaderWrapper />
      <SafeAreaView style={{flex: 1,  backgroundColor: COLORS.white}}  >
        <View style={{flex: 1}}>

                <View style={styling.settingGroupWrapper} >
                      {
                          res.map((item, index) => 
                          (
                            <React.Fragment key={index} >
                                <ItemSettings  label={item.label} onPress={() => navigation.navigate(`${item.route}`)} />
                            </React.Fragment>
                          ))
                      }
                </View>
                <View style={styling.settingGroupWrapper} >
                      {
                          res2.map((item, index) => 
                          (
                            <React.Fragment key={index} >
                                <ItemSettings  label={item.label} onPress={() => navigation.navigate(`${item.route}`)} />
                            </React.Fragment>
                          ))
                      }
                </View>

          
       




              
                <TouchableOpacity onPress={()=>signOut()}>
                    <Text >Logout</Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
    
     
  );
}


const styling = StyleSheet.create({
    settingItemWrapper:{

    },
    settingItemText:{

    },
    settingGroupWrapper:{

    },
});