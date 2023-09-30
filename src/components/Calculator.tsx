import React, { useState } from "react";
import Number from "./number";
import Signs from "./signs";

export default function Calculator() {
  const [counter, setCounter] = useState<string>('0');

  const handleNumberClick = (number: string) => {
    setCounter((prevCounter) => (prevCounter === '0' ? number : prevCounter + number));
  };

  const signFn = (sign: string) => {
    if (sign == 'AC') {
      setCounter('0')
    } else if (sign == '%') {
      const num: number = parseInt(counter, 10)/100; 
      setCounter(num.toString())
    } else if (sign == '+-') {
      const num: number = parseInt(counter, 10)*-1; 
      setCounter(num.toString())
    } else if (sign == '.') { 
      setCounter(counter + '.')
    } else if (sign == '//') {
  
    }
  }

  return (
    <div className="calculator">
      <Number counter={counter} />
      <Signs onNumberClick={handleNumberClick} signFn={signFn}/>
    </div>
  );
}
