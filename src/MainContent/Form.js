import { useState, useRef } from "react";
import { CorrectAnswer, FormContent, ContentWrapper, CurrentChar, Button, Input } from "./styled";
import { textToSpeak, cancelSpeak } from '../textToSpeach';

const Form = ({ charData, removeChar }) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * charData.length));
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const inputFocus = useRef(null);
    const [showInput, setShowInput] = useState(false);

    const setFocus = () => {
        inputFocus.current.focus();
    }

    const nextChar = () => {

        setRandomNumber(Math.floor(Math.random() * charData.length));
        setIsCorrect(false);
        cancelSpeak();
    };

    const checkAnswer = () => {
        if (answer.toLowerCase() === charData[randomNumber].roumaji) {
            const id = charData[randomNumber].id;

            setIsCorrect(false);
            textToSpeak(charData[randomNumber].kana);
            setShowInput(true);
            setTimeout(() => {
                setShowInput(false);
                removeChar(id);
                setRandomNumber(Math.floor(Math.random() * charData.length));
                
            }, 1000)


        } else {
            textToSpeak(charData[randomNumber].kana);
            setIsCorrect(true);
        }
        setAnswer("");
    };

    const handleCheck = (e) => {
        e.preventDefault();
        checkAnswer();
        
    };

    const handleNextChar = (e) => {
        e.preventDefault();
        setAnswer("")
        nextChar();
        setFocus();
    }


    return (
        <ContentWrapper>
            <p>Pozostało {charData.length} znaków</p>

            <CurrentChar>{charData[randomNumber].kana}</CurrentChar>

            <CorrectAnswer isCorrect={isCorrect}>
                Poprawna odpowiedź to "{charData[randomNumber].roumaji}"
            </CorrectAnswer>

            <FormContent>
                <p>
                    <Input isCorrect={!isCorrect&&!showInput} disabled={showInput} ref={inputFocus} type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                </p>
                {!isCorrect ? (
                    <>

                        <Button onClick={handleCheck}>Sprawdź</Button>
                    </>
                )
                    :
                    (
                        <Button onClick={handleNextChar}>Dalej</Button>
                    )}
            </FormContent>
        </ContentWrapper>
    );
};

export default Form;
