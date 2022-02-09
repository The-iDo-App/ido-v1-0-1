import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import COLORS from '../../src/consts/color';
import {Feather, FontAwesome, AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

export default function BioComponent() {

    const [bioEditModal, setBioEditModal] = useState(false);


  return (
    <>  
            <View style={{marginHorizontal: 20, marginTop: 10 }}  >
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', }}  >
                        <Text style={{fontSize: 20, marginRight: 5, color: COLORS.grey, fontWeight: '600'}} >Bio</Text>
                        <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
                        <TouchableOpacity>
                            <FontAwesome name='edit' size={30}  style={{marginLeft: 5, color: COLORS.grey}} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>I love my life</Text>
                    </View>
            </View>
            <Modal
                    animationType="slide"
                    visible={bioEditModal}
            >
            </Modal>
    </>
    
  );
}


const style = StyleSheet.create({
    modalHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center', 
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    modalBody:{
        display: 'flex',
        flexDirection: 'column',
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center'
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center',
        borderTopWidth: 1,
        borderColor: COLORS.grey, 
        
    },
})