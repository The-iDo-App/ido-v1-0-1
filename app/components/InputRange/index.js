//import liraries
import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Svg, { Line } from 'react-native-svg';
import Animated, { useCode } from 'react-native-reanimated';
import COLORS from '../../src/consts/color';

const {width, height, fontScale} = Dimensions.get("window");
const MAX_WIDTH = (width - 80) -20;


const {View: AView, Value, event, set, block, cond, lessThan, greaterThan, add, eq, createAnimatedComponent, call } = Animated;

const ALine = createAnimatedComponent(Line);
const AText = createAnimatedComponent(TextInput);

const usePanGesture = (initialPos) => {
    const transX = useRef(new Value(initialPos)).current;
    const offsetX = useRef(new Value(initialPos)).current;


    const onGestureHandle = useMemo(() => {

        return event([
            {
                nativeEvent:({translationX: x, state}) => 
                block([
                        cond(lessThan(add(offsetX, x), 0), set(transX, 0), [
                            cond(
                                greaterThan(add(offsetX, x), MAX_WIDTH),
                                set(transX, MAX_WIDTH),
                                set(transX, add(offsetX, x)),
                            )
                        ]),
                        cond(eq(state, State.END), [set(offsetX, add(offsetX, x))])
                ])
            }
        ])

    }, [transX, offsetX])

    return {transX, onGestureHandle}
}


const PanComponent = (initialPos) => {
    const {transX, onGestureHandle} = usePanGesture()

    const Pan = () => (
        <PanGestureHandler onGestureEvent={onGestureHandle}  onHandlerStateChange={onGestureHandle}  >
            <AView style={[styles.knob, {transform:[{translateX: transX}]}]} />
        </PanGestureHandler>
    )


    return {Pan, transX};
}

// create a component
const AgeRange = ({minValue, maxValue, onChangeMin, onChangeMax, initialValue}) => {

    const min = useRef(null);
    const max = useRef(null);

    useCode(() => [
            call([x1],([value]) =>{
                if(min.current){
                         onChangeMin(minValue + (value/MAX_WIDTH)*(maxValue-minValue));
                         min.current.setNativeProps({
                             text: `${Math.round(minValue + (value/MAX_WIDTH)*(maxValue-minValue))}`,

                         })
                }
               
            })
    ] , [x1])

        useCode(() => [
            call([x2],([value]) =>{
                if(max.current){
                         onChangeMax(minValue + (value/MAX_WIDTH)*(maxValue-minValue));
                         max.current.setNativeProps({
                             text: `${Math.round(minValue + (value/MAX_WIDTH)*(maxValue-minValue))}`,

                         })
                }
               
            })
    ] , [x1])



    const {Pan: Pan1, transX: x1} = PanComponent(0);
    const {Pan: Pan2, transX: x2} = PanComponent(MAX_WIDTH);

    return (
        <View style={styles.container}>
            <>
                <View style={styles.trail} />
                <View style={{position: 'absolute'}} >
                    <Svg height="4" width={width-80}  >
                        <ALine stroke={COLORS.blue} strokeWidth="12" x1={x1} y1={0} x2={x2} y={0}  />
                    </Svg>
                </View>
                <Pan1 />
                <Pan2 />
            </>
            
            <View style={styles.txtContainer} >
                <AText defaultValue={initialValue.toString()} editable={false} ref={min} style={styles.label}    />
                <AText defaultValue={MAX_WIDTH.toString()} editable={false} ref={max} style={styles.label}    />
                
               
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
        justifyContent: 'center',
    },
    txtContainer:{
        flexDirection: 'row',
        marginBottom: 40, 
        alignContent: 'center', 
        justifyContent: 'space-between', 
        width: width - 80
    },
    label: {
        fontSize: 16/fontScale, 
        color: COLORS.grey, 
        marginBottom: 10
    },
    trail:{
        backgroundColor: COLORS.grey, 
        height: 4, 
        borderRadius: 6, 
        width: width - 80, 
        position: 'absolute'
    }, 
    knob:{
        height: 20, 
        width: 20, 
        borderRadius: 10, 
        backgroundColor: '#1381a2', 
        position: 'absolute',
        elevation: 5, 
        shadowColor: '#000',
        shadowRadius: 4, 
        shadowOffset:{
            height: 2, 
            width: 0
        },
        shadowOpacity: 0.2
    }
});

//make this component available to the app
export default AgeRange;
