import { useHiragana } from './useHiragana';
import MainContent from './MainContent/Form'
import Header from './Header'
import StartButton from './StartButton';
import { useState } from 'react';

function App() {

  const [charData, removeChar] = useHiragana();
  const [startQuiz, setStartQuiz] = useState(false)

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
