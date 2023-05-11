import { useState, useRef } from "react";
import { CorrectAnswer, FormContent, ContentWrapper, CurrentChar, Button, Input } from "./styled";
import { textToSpeak, cancelSpeak } from '../textToSpeach';

const Form = ({ charData, removeChar }) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * charData.length));
    const [answer, setAnswer] = useState("");
    const [nextStep, setNextStep]=useState(true);
    const [isCorrect, setIsCorrect] = useState(true);
    const inputFocus = useRef(null);

    const getNewChar = ()=>{
        cancelSpeak();
        setRandomNumber(Math.floor(Math.random() * charData.length));
        setIsCorrect(true);
        setNextStep(true);
        setAnswer("");
    }


   const correctAnswer =()=>{
    removeChar(charData[randomNumber].id);
    setIsCorrect(true);
   }

   const incorrectAnswer =()=>{
    textToSpeak(charData[randomNumber].kana);
    setIsCorrect(false);
   }

    const checkAnswer =()=>{
        if(charData[randomNumber].roumaji === answer.toLowerCase()){
            correctAnswer();
            getNewChar();
        }
        else{
            incorrectAnswer()
            setNextStep(false)
        }

    }
   
    const handleCheckAnswer=(e)=>{
        e.preventDefault();
        checkAnswer();
    }

    const handleNext = (e)=>{
        e.preventDefault();
        getNewChar();
    }

    const handleSpeak = ()=>{
        textToSpeak(charData[randomNumber].kana);
    }

    return (
        <ContentWrapper>
            <p>Pozostało {charData.length} znaków</p>
            <CurrentChar onClick={handleSpeak}>{charData[randomNumber].kana}</CurrentChar>
            <CorrectAnswer isCorrect={!isCorrect}>
                Poprawna odpowiedź to "{charData[randomNumber].roumaji}"
            </CorrectAnswer>

            <FormContent>
                <p>
                    <Input isCorrect={isCorrect} ref={inputFocus} type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                </p>
                {
                    nextStep ? (<Button onClick={handleCheckAnswer}>Sprawdź</Button>):(<Button onClick={handleNext}>Dalej</Button>)
                }   
            </FormContent>
        </ContentWrapper>
    );
};

export default Form;
