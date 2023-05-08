import { useState } from "react";
import hiraganaData from './hiragana.json';

export const useHiragana = () => {
    const [charData, setCharData] = useState([]);
 
    const hiragana = hiraganaData;
    const newData = hiragana.map((item, index) => ({
      id: index + 1,
      ...item,
      know: false
    }));
  
    const removeChar = (id) => {
      setCharData(charData.filter((item) => item.id !== id));
    };
  
    const handleStart = () => {
      setCharData(newData);
    }

    return [charData, removeChar, handleStart];
};