import React,  {useState,useEffect} from 'react';
import { View, Text, Dimensions} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import QuestionList from '../../models/QuestionsList';
import COLORS from '../../src/consts/color';
import NextButton from '../NextButton';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from '../../components/Toast';
import {BACKEND_BASEURL,BACKEND_DEVURL,PORT} from '@env';

const {width, height, scale} = Dimensions.get('window');
const WIDTH = width - 50;

export default function QuestionInterest() {
    const [questionsDB, setQuestionsDB] = useState([]);
    const [answers,setAnswers] = useState([]);
    const [questions,setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
  
    const [message,setMessage] = useState("Feedback saved!");
    const [visibleToast, setvisibleToast] = useState(false);
    useEffect(() => setvisibleToast(false), [visibleToast]);
    const [posted, setPosted] = useState(false);

    const navigation = useNavigation();

    // let questionsDB;
    useEffect(() => {
        const fetchData = async() =>{
            let questions = await axios.get(`${BACKEND_BASEURL}/api/questions`);
            console.log(questions.data);
            setQuestionsDB(questions.data.questions);
            let qID = questions.data.questions;
            qID.forEach(itemId => {
                // console.log(itemId._id);
                setQuestions(item => [...item,itemId._id]);
            });
        }
       fetchData();
    }, []);

    const pressAnswer = async(selectedChoice) => {
        setCurrentOptionSelected(selectedChoice);
        setShowNextButton(true);
        // console.log(selectedChoice); // ANSWER SA TANONG
    }
    
    const postEvaluation = async()=>{
        const userId = await AsyncStorage.getItem('userId');
        const interest = await AsyncStorage.getItem('interestId');
        try{
            const response = await axios.post(`${BACKEND_BASEURL}/api/evaluations`,{
                userId,
                interest,
                questions,
                answers,
            });
            if (response.status === 200) {
                setMessage("\u00A0Answers successfully saved!\nYou can now find your match!");
                navigation.navigate('Onboarding');
            } else {
                setMessage("An error has occurred");
                throw new Error("An error has occurred");
            }
        }catch (error) {
            console.log(error);
            setMessage("An error has occurred");
        }
        setvisibleToast(true);

    }

    const handleNext = () => {
        if(currentQuestionIndex === questionsDB.length-1){
            //last question 
            // navigate to onboarding page
            setAnswers(oldAnswer => [...oldAnswer,currentOptionSelected]);
            //USER ANSWERS ON QUESTIONS
            postEvaluation();
        }
        else{
            setAnswers(oldAnswer => [...oldAnswer,currentOptionSelected]);
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
                <Text style={{color: COLORS.grey, fontSize: 16}} >/{questionsDB.length}</Text>
            </View>
            <Text style={{color: COLORS.blue, fontSize:18}} >{questionsDB[currentQuestionIndex]?.question}</Text>
          </View>
      )
      
  }

  const renderOptions = () => {
      return (
          <View>
                {
                    questionsDB[currentQuestionIndex]?.choices.map(choice => (
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
                    <NextButton TextButton={currentQuestionIndex === questionsDB.length-1 ? "Submit" : "Next" } backgroundColor={COLORS.lightPink} onPress={()=>handleNext()} />
              </View>
              
          )
      }
      else{
          return null

      }
  }




  return (
    <View style={{alignSelf: 'center', width: WIDTH, backgroundColor: COLORS.white, flex: 1}}  >
        <Snackbar message={message} visibleToast={visibleToast}/>
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
