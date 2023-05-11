import { useState, useEffect } from "react";
import hiraganaData from './hiragana.json';

export const useHiragana = () => {
  const [charData, setCharData] = useState(
    JSON.parse(localStorage.getItem("charData")) ||
    hiraganaData.map((item, index) => ({
      id: index + 1,
      ...item,
      know: false
    }))
  );

  useEffect(() => {
    localStorage.setItem("charData", JSON.stringify(charData));
  }, [charData]);

  const removeChar = (id) => {
    setCharData(charData.filter((item) => item.id !== id));
  };
  return [charData, removeChar];
};