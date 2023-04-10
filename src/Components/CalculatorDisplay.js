import "./CalculatorDisplay.css";

const CalculatorDisplay = ({ input, result, fontSize }) => {
  return (
    <div className={`calculatorDisplay ${fontSize}`}>
      <div className="result">{result}</div>
      <div className="input"> {input}</div>
    </div>
  );
};

export default CalculatorDisplay;
