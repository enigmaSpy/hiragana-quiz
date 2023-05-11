import { useHiragana } from './useHiragana';
import MainContent from './MainContent/Form'
import Header from './Header'
import StartButton from './StartButton';
import { useState, useEffect } from 'react';

function App() {

  const [charData, removeChar] = useHiragana();
  const [startQuiz, setStartQuiz] = useState(JSON.parse(sessionStorage.getItem("sessionLogin"))||false)

  useEffect(()=>{
    sessionStorage.setItem("sessionLogin", JSON.stringify(startQuiz));
  },[startQuiz])

  const handleStart = ()=>{
    setStartQuiz(true);
  }

  return (
    <main>
      <Header/>
     
      {startQuiz ? (<MainContent charData={charData} removeChar={removeChar}/>):(<StartButton handleStart={handleStart}/>)}
    </main>
  );
}

export default App;
