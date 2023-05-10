import { useHiragana } from './useHiragana';
import MainContent from './MainContent/Form'
import Header from './Header'
import StartButton from './StartButton';

function App() {

  const [charData, removeChar, handleStart] = useHiragana();

  return (
    <main>
      <Header/>
     
      {charData.length > 0 ? (<MainContent charData={charData} removeChar={removeChar}/>):(<StartButton handleStart={handleStart}/>)}
    </main>
  );
}

export default App;
