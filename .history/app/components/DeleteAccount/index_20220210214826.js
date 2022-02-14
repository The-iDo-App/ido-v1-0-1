import React from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, Pressable , TouchableOpacity, FlatList} from 'react-native';
import COLORS from '../../src/consts/color';
import Register from '../../src/styles/screens/registration';

const {width, height} = Dimensions.get('window')

const REASONS = [
    {key: 0, dahilan: 'I am wasting my leisure hours'},
    {key: 1, dahilan: 'I am not having fun'},
    {key: 2, dahilan: 'I met someone'},
    {key: 3, dahilan: 'Dating in real life is still a thing'},
    {key: 4, dahilan: "It's starting to get out of control"},
    {key: 5, dahilan: 'I kept meeting the wrong person'},
    {key: 6, dahilan: 'Online dating is emotionally consuming'},
]

// sauce: https://afterdefeat.wordpress.com/2015/07/06/the-7-reasons-i-deleted-my-online-dating-profiles/


const Item =({item, onPress, backgroundColor, borderColor, color}) => {
    return(
    <TouchableOpacity style={[Register.chips, backgroundColor, borderColor]} onPress={onPress}>
            <View >
                <Text style={[Register.chipsText,color]}>{item}</Text>
            </View>
    </TouchableOpacity>
    )
}


export default function DeleteAccountModal({onPress, modalVisible}) {

    const [selectReason, setSelectReason] = React.useState("");
    const [reasoning, setReasoning] = React.useState(null);
    const [confirmModal, setConfirmModal] = React.useState(false);

    // const [selectOrientation, setSelectOrientation] = useState("");
    // const [orientation, setOrientation] = useState(null);

    const handleReason = (key, reasoning) =>{                                               
        setReasoning(reasoning)
        setSelectReason(key);
    }

    const handleDeleteAccount = () => {
        
    }

  return (
     <>
         <Modal
                animationType="slide"
                visible={modalVisible}
                fullScreen
          >
                        <View style={style.modalHeader} >
                            <Text style={style.textStyle} >Delete Account</Text>
                            <Pressable onPress={onPress}>
                                <Text style={style.textStyle} >&times;</Text>
                            </Pressable>
                        </View>
                        <View style={style.modalBody} >
                            <View style={{marginBottom: 20}} >
                                <Text style={{color: COLORS.blue, fontWeight: '700', fontSize: 20}} >Reason for deletion:</Text>
                            </View>
                            <FlatList 
                            scrollEnabled={true}
                            data={REASONS}
                            renderItem={({item}) => {
                                const backgroundColor = item.key === selectReason  ? COLORS.darkPink : COLORS.white;
                                const borderColor = item.key ===  selectReason ? COLORS.darkPink : COLORS.grey;  
                                const color = item.key ===  selectReason  ? COLORS.white : COLORS.grey;      
                                return (
                                    <Item
                                        item={item.dahilan}
                                        onPress={()=>handleReason(item.key,item.dahilan)}
                                        backgroundColor={{backgroundColor}}
                                        borderColor={{borderColor}}
                                        color={{color}}
                                    />  
                                        )
                                    }}
                            
                            keyExtractor={item=> item.key.toString()}
                        />
                               
                        </View>
                        <View style={style.modalFooter} >
                             <Pressable style={style.saveBtn} >
                                 <Text style={style.btnTxt} >DELETE ACCOUNT</Text>
                             </Pressable>
                        </View>
        </Modal>
        
         <Modal
            animationType="fade"
            visible={confirmModal}
            transparent={true}
                    
         >
            <View style={smallStyle.anotherView}>
                <View style={smallStyle.modalView} >
                    <View style={smallStyle.modalHeader} >
                        <Text style={smallStyle.textStyle} >Edit bio</Text>
                        <Pressable onPress={()=>setConfirmModal(false)}>
                                <Text style={style.textStyle} >&times;</Text>
                        </Pressable>
                    </View>
                    <View style={smallStyle.modalBody} >
                            
                    </View>
                    <View style={smallStyle.modalFooter} >
                                <Pressable  onPress={()=>setConfirmModal(false)}  style={style.closeBtn}>
                                        <Text style={smallStyle.btnTxt} >CLOSE</Text>
                                </Pressable>
                                <Pressable style={smallStyle.saveBtn} onPress={handleDeleteAccount} >
                                        <Text  style={smallStyle.btnTxt} >DELETE ACCOUNT</Text>
                                </Pressable>
                    </View>
                </View>
                 
            </View>
                   
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
        alignSelf: 'center', 
        flex: 1
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        padding: width/20,
        width: width - 10, 
        alignSelf: 'center',
    },
    textStyle:{
        fontSize: width/20, 
        color: COLORS.blue, 
        fontWeight: '600'
    }, 
    saveBtn:{
        backgroundColor: COLORS.darkPink,
        width: width - 40, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40, 
    },
    btnTxt:{
        fontSize: width/25, 
        color: COLORS.white
    },
    
})


const smallStyle = StyleSheet.create({
    modalHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 40, 
        alignSelf: 'center', 
        borderBottomWidth: 1,
        borderColor: COLORS.grey
    },
    modalBody:{
        display: 'flex',
        flexDirection: 'column',
        padding: width/20,
        width: width - 30, 
        alignSelf: 'center', 
        flex: 1
    },
    modalFooter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        padding: width/20,
        width: width - 30, 
        alignSelf: 'center',
        borderTopWidth: 1,
        borderColor: COLORS.grey, 
        
    },
    textStyle:{
        fontSize: width/20, 
        color: COLORS.blue, 
        fontWeight: '600'
    }, 
    closeBtn: {
        backgroundColor: COLORS.grey,
        width: width/2.5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40,
        
    },
    saveBtn:{
        backgroundColor: COLORS.darkPink,
        width: width/2.5, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: width/2,
        padding: width/40,
       
    },
    btnTxt:{
        fontSize: width/25, 
        color: COLORS.white
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width/2, 
    marginVertical: width/2,
   
  },
  anotherView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:  'rgba(0, 0, 0, 0.4)'
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width/1.05,
    height: width/1.35
  },
})