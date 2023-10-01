import { useState } from "react";
import Number from "./number";
import Signs from "./signs";

export default function Calculator() {
  const [counter, setCounter] = useState<string>('0');
  const [counterTwo, setCounterTwo] = useState<string>('');
  const [signR, setSignR] = useState<string>('');

  const handleNumberClick = (number: string) => {
    setCounter((prevCounter) => (prevCounter === '0' ? number : prevCounter + number));
  };

  const signFn = (sign: string) => {
    if (sign === 'AC') {
      setCounter('0');
      setCounterTwo('');
      setSignR('');
    } else if (sign === '%') {
      const num: number = parseFloat(counter) / 100
      setCounter(num.toString());
    } else if (sign === '+-') {
      const num: number = parseFloat(counter) * -1;
      setCounter(num.toString());
    } else if (sign === '.') {
      if (!counter.includes('.')) {
        setCounter(counter + '.');
      }
    } else if (sign === '//' || sign === '*' || sign === '-' || sign === '+' || sign === '=') {
      if (counterTwo !== '') {
        switch (signR) {
          case '//':
            const num1 = parseFloat(counterTwo);
            const num2 = parseFloat(counter);
            if (num2 !== 0) {
              setCounter((num1 / num2).toString());
            } else {
              setCounter('Error');
            }
            break;
          case '*':
            setCounter((parseFloat(counterTwo) * parseFloat(counter)).toString());
            break;
          case '-':
            setCounter((parseFloat(counterTwo) - parseFloat(counter)).toString());
            break;
          case '+':
            setCounter((parseFloat(counterTwo) + parseFloat(counter)).toString());
            break;
          default:
            break;
        }
        setCounterTwo('');
        setSignR('');
      } else {
        setCounterTwo(counter);
        setCounter('');
        setSignR(sign);
      }
    }
  };

  return (
    <div className="calculator">
      <Number counter={counter} counterTwo={counterTwo} />
      <Signs onNumberClick={handleNumberClick} signFn={signFn} />
    </div>
  );
}
