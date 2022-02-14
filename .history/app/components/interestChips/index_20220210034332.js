import React from 'react';
import { View, Text } from 'react-native';
import IdoChip from '../idoChip';
import TouchableOP


export default function InterestChips() {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10, flex: 1, justifyContent: 'center' }}  >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}  >
                        <Text style={{fontSize: 20,  color: COLORS.grey, fontWeight: '600'}} >Bio</Text>
                        <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
                        <TouchableOpacity onPress={() => setBioEditModal(true)} >
                            <FontAwesome name='edit' size={30}  style={{ color: COLORS.grey}} />
                        </TouchableOpacity>
                    </View>
     </View>
  );
}
