import signesObj from "./sign";

export default function Signs({ onNumberClick, signFn}: { onNumberClick: (number: string) => void, signFn: (sign: string) => void, sign: string}){
  const numbers: number[] = Array.from(Array(10).keys());
  
  return (
    <div className="signs">
      {Object.values(signesObj).map((operation) => (
        <div className='sign no-select'onClick={() => {signFn(operation.sign)}}id={operation.id} key={operation.id}>
          {operation.sign}
        </div>
      ))}
      {numbers.map((number) => (
        <div className="sign no-select" onClick={() => {onNumberClick(number.toString()); }} id={`number${number}`} key={number}>
          {number}
        </div>
      ))}
    </div>
  )
}
