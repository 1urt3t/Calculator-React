
export default function Number({ counter, counterTwo }: { counter: string, counterTwo: string }) {
  return (
    <div className="number">
      <div className="count">{counter == '' ? counterTwo:counter}</div>
    </div>
  );
}
