import { useState } from "react";
import { CorrectAnswer, FormContent, ContentWrapper, CurrentChar, Button, Input } from "./styled";
import {textToSpeak,cancelSpeak} from '../textToSpeach';

const Form = ({ charData, removeChar }) => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * charData.length));
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const nextChar = () => {

        setRandomNumber(Math.floor(Math.random() * charData.length));
        setIsCorrect(false);
        cancelSpeak();
    };

    const checkAnswer = () => {
        if (answer.toLowerCase() === charData[randomNumber].roumaji) {
            setIsCorrect(false);
            const id = charData[randomNumber].id;
            removeChar(id);
            setRandomNumber(Math.floor(Math.random() * charData.length));

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
        nextChar();
    }


    return (
        <ContentWrapper>
            <p>Pozostało {charData.length} znaków</p>

            <CurrentChar>{charData[randomNumber].kana}</CurrentChar>

            <CorrectAnswer isCorrect={isCorrect}>
                Poprawna odpowiedź to "{charData[randomNumber].roumaji}"
            </CorrectAnswer>

            <FormContent>
                {!isCorrect ? (
                    <>
                        <p>
                            <Input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
                        </p>
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
