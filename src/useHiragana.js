import { useState } from "react";
import hiraganaData from './hiragana.json';

export const useHiragana = () => {
    const [charData, setCharData] = useState(
      hiraganaData.map((item, index) => ({
        id: index + 1,
        ...item,
        know: false
      }))
    );

    const removeChar = (id) => {
      setCharData(charData.filter((item) => item.id !== id));
    };
  
    return [charData, removeChar];
};