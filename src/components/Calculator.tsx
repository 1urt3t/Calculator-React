import { useState } from "react";
import Number from "./number";
import Signs from "./signs";

export default function Calculator() {
  const [numberOne, setNumberOne] = useState<string>('0');
  const [numberTwo, setNumberTwo] = useState<string>('');
  const [signR, setSignR] = useState<string>('');
  const [AC, setAC] = useState<boolean>(true);

  const handleNumberClick = (number: string) => {
      setNumberOne((prevCounter) => prevCounter == '0' ? number: prevCounter + number);
  };

  const signFn = (sign: string) => {
    const acFnDot = () => {
      setNumberOne('0.');
      setNumberTwo('');
      setSignR('');
      setAC(true);
    }
    if (sign === 'AC') {
      setNumberOne('0');
      setNumberTwo('');
      setSignR('');
      setAC(true);
    } else if (sign === '%') {
      const num: number = parseFloat(numberTwo != '' ? numberTwo:numberOne) / 100;
      numberTwo != ''? setNumberTwo(num.toString()):setNumberOne(num.toString()) ;
    } else if (sign === '+/-') {
      const num: number = parseFloat(numberTwo != ''? numberTwo:numberOne) * -1;
      numberTwo != ''? setNumberTwo(num.toString()):setNumberOne(num.toString()) ;
    } else if (sign === '.') {
      if (numberTwo == '' ?!numberOne.includes('.'):!numberTwo.includes('.')) {
        numberTwo == ''?setNumberOne(numberOne + '.'):acFnDot();
      }
    } else if (sign === '÷' || sign === '×' || sign === '-' || sign === '+' || sign === '=') {
      if (numberTwo !== '' && numberOne !== '') {
        switch (signR) {
          case '÷':
            const num1 = parseFloat(numberTwo);
            const num2 = parseFloat(numberOne);
            if (num2 !== 0) {
              setNumberTwo((num1 / num2).toString());
            } else {
              setNumberOne('Error');
              console.log('none')
            }
            break;
          case '×':
            setNumberTwo((parseFloat(numberTwo) * parseFloat(numberOne)).toString());
            break;
          case '-':
            setNumberTwo((parseFloat(numberTwo) - parseFloat(numberOne)).toString());
            break;
          case '+':
            setNumberTwo((parseFloat(numberTwo) + parseFloat(numberOne)).toString());
            break;
          default:
            break;
        }
        setNumberOne('');
        sign == '=' ? setAC(true): setSignR(sign)
      } else if (AC === true){
        setAC(false);
        numberTwo == '' ? setNumberTwo(numberOne): '';
        setNumberOne('');
        setSignR(sign);
      }
    }
  };

  return (
    <div className="calculator">
      <Number counter={numberOne} counterTwo={numberTwo} />
      <Signs onNumberClick={handleNumberClick} signFn={signFn} sign={signR}/>
    </div>
  );
}
