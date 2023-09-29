import signesObj from "./sign"
import { useState } from "react";

export default function Signs() {
  const numbers: number[] = Array.from(Array(10).keys());
  const [isActive, setIsActive] = useState(false);

  const border = () => {
    setIsActive(true);
  }
  const mouse = () => {
    setIsActive(false);
  }
  return (
    <div className="signs">
        {Object.values(signesObj).map((operation) => (
          <div className='sign no-select' onClick={border} onMouseUp={mouse} id={operation.id}key={operation.id}>{operation.sign}</div>
        ))}
        {numbers.map((number) => (
          <div className="sign no-select" onClick={border} onMouseUp={mouse} id={`number${number}`} key={number}>
              {number}
          </div>
        ))}
    </div>
  )
}