import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import IdoChip from '../idoChip';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../src/consts/color';
import MyFakeData from '../../models/MyData';

const {width} = Dimensions.get('window');

export default function InterestChips() {
  return (
    <View style={{paddingHorizontal: 20, marginTop: 10, flex: 1, justifyContent: 'center' }}  >
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',  justifyContent: 'center' }}  >
             <Text style={{fontSize: 20,  color: COLORS.grey, fontWeight: '600'}} >My interests</Text>
             <View style={{height: 1, backgroundColor: COLORS.grey, flex: 1, }} />
        </View>
        <View style={{ borderColor: COLORS.grey, borderWidth: 0.5, borderStyle: 'solid', borderRadius: 10, flex: 1, paddingHorizontal: 10, paddingVertical: 20, width: width-40, marginTop: 20}} >
                {/*SPORTS*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>

                {/*HOBBIES*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Hobbies</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((hobby, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={hobby} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                {/*MUSIC*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                {/*FILM*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                {/*PET*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                {/*BOOK*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                {/*FOOD*/}
                <View>
                    <Text style={chipStyle.itemLabel}>Sports</Text>
                    <View style={chipStyle.itemWrapper} >
                        {
                            MyFakeData.map((item, i) => (
                                <React.Fragment key={i}>
                                    {
                                        item.interests.sports.map((sporty, index) => (
                                            <React.Fragment key={index}>
                                                <IdoChip isProfile={false} text={sporty} isProfile={true} />
                                            </React.Fragment>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>

        </View>
     </View>
  );
}

const chipStyle = StyleSheet.create({
  itemWrapper:{
    display: 'flex', 
    flexDirection: 'row', 
    width: '100%',  
    flexWrap: 'wrap'
  },
  itemLabel: {
    color: COLORS.blue, 
    fontSize: 16, 
    fontWeight: '700',
    marginVertical: 10
  }
})
