import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import "./Components/ButtonZero";
import ButtonZero from "./Components/ButtonZero";
import CalculatorDisplay from "./Components/CalculatorDisplay";
import { Decimal } from "decimal.js";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [symbol, setSymbol] = useState("");
  const [btnAC, setBtnAC] = useState("AC");

  function isValidInput() {
    if (input === "" || input[input.length - 1] === ".") {
      return false;
    }
    return true;
  }

  function addInput(value) {
    setBtnAC("C");
    if (input.length > 12) return;
    if (value === "0" && input === "0") return;
    if (value === "." && (input === "" || input.includes("."))) return;
    if (input === "" || (input === "0" && value !== ".")) {
      setInput(value);
    } else {
      setInput(input + value);
    }
  }

  const resetInput = () => {
    setInput("");
    setResult("");
    setBtnAC("AC");
  };

  const minusPlus = () => {
    if (input === "0" || input === "") return;
    if (input.includes("-")) {
      setInput((input) => input.slice(1).toString());
    } else {
      setInput("-" + input);
    }
  };

  const addResult = (el) => {
    setSymbol(el);
    if (result === "") {
      setResult(input);
      setInput("");
    }
  };

  const calculate = () => {
    if (result === "") return;
    if (!isValidInput()) return;
    let calculateResult = 0;
    let numRes = new Decimal(result);
    let numInp = new Decimal(input);
    switch (symbol) {
      case "%":
        calculateResult = numRes.modulo(numInp);
        break;
      case "+":
        calculateResult = numRes.plus(numInp);
        break;
      case "-":
        calculateResult = numRes.minus(numInp);
        break;
      case "×":
        calculateResult = numRes.mul(numInp);
        break;
      case "÷":
        calculateResult = numRes.div(numInp);
        break;
      default:
        console.error("&*(^*&");
        return;
    }
    setResult(calculateResult.toFixed());
    setInput("");
    setSymbol("");
  };

  function computeFontSize() {
    let max = Math.max(input.length, result.length);
    if (max > 20) {
      return "font-size-small";
    } else {
      return "font-size-normal";
    }
  }

  return (
    <div className="App">
      <div className="calculatorArea">
        <CalculatorDisplay
          input={input}
          result={result}
          fontSize={computeFontSize()}
        />
        <div className="row">
          <Button sign={btnAC} handleClick={resetInput} color="#989a99" />
          <Button sign="+/-" handleClick={minusPlus} color="#989a99" />
          <Button sign="%" handleClick={addResult} color="#989a99" />
          <Button sign="÷" handleClick={addResult} color="#fcc500" />
        </div>
        <div className="row">
          <Button sign="7" handleClick={addInput} />
          <Button sign="8" handleClick={addInput} />
          <Button sign="9" handleClick={addInput} />
          <Button sign="×" handleClick={addResult} color="#fcc500" />
        </div>
        <div className="row">
          <Button sign="4" handleClick={addInput} />
          <Button sign="5" handleClick={addInput} />
          <Button sign="6" handleClick={addInput} />
          <Button sign="-" handleClick={addResult} color="#fcc500" />
        </div>
        <div className="row">
          <Button sign="1" handleClick={addInput} />
          <Button sign="2" handleClick={addInput} />
          <Button sign="3" handleClick={addInput} />
          <Button sign="+" handleClick={addResult} color="#fcc500" />
        </div>
        <div className="row">
          <ButtonZero sign="0" handleClick={addInput} />
          <Button sign="." handleClick={addInput} />
          <Button sign="=" handleClick={calculate} color="#fcc500" />
        </div>
      </div>
    </div>
  );
}

export default App;
