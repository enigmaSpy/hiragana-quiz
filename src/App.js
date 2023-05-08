import { useHiragana } from './useHiragana';
import hiraganaData from './hiragana.json';
import MainContent from './MainContent/Form'
import Header from './Header'

function App() {

  const [charData, removeChar, handleStart] = useHiragana();

  return (
    <main>
      <Header/>
     
      {charData.length > 0 ? (<MainContent charData={charData} removeChar={removeChar}/>):(<button onClick={handleStart}>Start</button>)}
    </main>
  );
}

export default App;
