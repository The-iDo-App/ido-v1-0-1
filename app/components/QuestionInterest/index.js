import React,  {useState} from 'react';
import { View, Text, Dimensions} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import QuestionList from '../../models/QuestionsList';
import COLORS from '../../src/consts/color';
import NextButton from '../NextButton';
import { useNavigation } from '@react-navigation/native';

const {width, height, scale} = Dimensions.get('window');
const WIDTH = width - 50;

export default function QuestionInterest() {

    const allQuestions = QuestionList;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
  
    const navigation = useNavigation();

    const pressAnswer = (selectedChoice) => {
        setCurrentOptionSelected(selectedChoice);
        setShowNextButton(true)
    }
    
    const handleNext = () => {
        if(currentQuestionIndex === allQuestions.length-1){
            //last question 
            // navigate to onboarding page
            navigation.navigate('Onboarding');
        }
        else{
            setCurrentQuestionIndex(currentQuestionIndex+1); 
            setCurrentOptionSelected(null);
            setShowNextButton(false);
        }
        
    }







   
  const renderQuestion = () => {
     
      return (
          <View style={{marginBottom: 10}} >
            <View style={{flexDirection: 'row', alignItems: 'flex-end' }}  >
                <Text style={{color: COLORS.blue, fontSize: 18}}  >{currentQuestionIndex+1}</Text>
                <Text style={{color: COLORS.grey, fontSize: 16}} >/{allQuestions.length}</Text>
            </View>

            <Text style={{color: COLORS.blue, fontSize:18}} >{allQuestions[currentQuestionIndex]?.question}</Text>
            
          </View>
      )
      
  }

  const renderOptions = () => {
      return (
          <View>
                {
                    allQuestions[currentQuestionIndex]?.choices.map(choice => (
                        <TouchableOpacity onPress={() => pressAnswer(choice)} key={choice} style={{borderWidth: 2, borderColor: choice === currentOptionSelected ? COLORS.darkPink : COLORS.grey, backgroundColor: choice === currentOptionSelected ? COLORS.darkPink : COLORS.white , borderRadius: 20, padding: 16/scale, marginVertical: 10/scale}}  >
                            <Text style={{color: choice === currentOptionSelected ? COLORS.white : COLORS.grey, fontSize: 16, padding: 10/scale}}  >{choice}</Text>
                        </TouchableOpacity>
                    ))
                }

          </View>
      )
  }

  const renderNextButton = () => {
      if(showNextButton) {
          return (
              <View >
                    <NextButton TextButton={currentQuestionIndex === allQuestions.length-1 ? "Submit" : "Next" } backgroundColor={COLORS.lightPink} onPress={()=>handleNext()} />
              </View>
              
          )
      }
      else{
          return null

      }
  }




  return (
    <View style={{alignSelf: 'center', width: WIDTH, backgroundColor: COLORS.white, flex: 1}}  >
        <ScrollView style={{height: height/1.8, backgroundColor: COLORS.white}}  >
            {/*Question*/}
            {renderQuestion()}

            {/*Options*/}
             {renderOptions()}
        </ScrollView>
            {/*Next Button*/}
            {renderNextButton()}

    </View>
  );
}
