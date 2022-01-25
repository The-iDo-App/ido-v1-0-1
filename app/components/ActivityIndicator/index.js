import React from 'react'
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';

function Loading() {
    return (
        <>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"  color="#FFC0CB"/>  
            </View>
        </>
    )
}

export default Loading;
