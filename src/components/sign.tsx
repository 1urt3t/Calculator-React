type SignesSecond = {
    id: string;
    sign: string;
  }
  
  type Signes = {
    [key: string]: SignesSecond
  }
  
  const signesObj: Signes = {
    plus: {
      id: 'plus',
      sign: '+',
    },
    minus: {
      id: 'minus',
      sign: '-'
    },
    multiply: {
      id: 'multiply',
      sign: '×'
    },
    divide: {
      id: 'divide',
      sign: '÷'
    },
    dot: {
      id: 'dot',
      sign: '.'
    },
    equals: {
      id: 'equals',
      sign: '='
    },
    percent: {
      id: 'percent',
      sign: '%'
    },
    plus_minus: {
      id: 'plus_minus',
      sign: '+/-'
    },
    ac: {
      id: 'ac',
      sign: 'AC'
    }
  };
  
export default signesObj;
  