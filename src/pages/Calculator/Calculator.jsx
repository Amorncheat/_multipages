import "./Calculator.css"
import React, { useState } from "react";

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState(null);

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes(".")) return;
    setCurrentOperand(currentOperand.toString() + number.toString());
  };

  const chooseOperation = (operation) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(operation);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const compute = () => {
    let computation;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(previous) || isNaN(current)) return;

    switch (operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "x":
        computation = previous * current;
        break;
      case "÷":
        computation = previous / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation);
    setPreviousOperand("");
    setOperation(null);
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(null);
  };

  const deleteLast = () => {
    setCurrentOperand(currentOperand.toString().slice(0, -1));
  };

  return (
    <div className="wrapper">
      <section className="screen">
        <div className="pre" data-pre>
          {previousOperand} {operation}
        </div>
        <div className="now" data-now>
          {currentOperand}
        </div>
      </section>

      <section className="calc-btn_row">
        <div className="calc_btn_row">
          <button className="calc_btn double" onClick={clear}>
            C
          </button>
          <button className="calc_btn" onClick={deleteLast}>
            ←
          </button>
          <button className="calc_btn operation" onClick={() => chooseOperation("÷")}>
            ÷
          </button>
        </div>

        <div className="calc_btn_row">
          <button className="calc_btn" onClick={() => appendNumber("7")}>
            7
          </button>
          <button className="calc_btn" onClick={() => appendNumber("8")}>
            8
          </button>
          <button className="calc_btn" onClick={() => appendNumber("9")}>
            9
          </button>
          <button className="calc_btn operation" onClick={() => chooseOperation("x")}>
            x
          </button>
        </div>

        <div className="calc_btn_row">
          <button className="calc_btn" onClick={() => appendNumber("4")}>
            4
          </button>
          <button className="calc_btn" onClick={() => appendNumber("5")}>
            5
          </button>
          <button className="calc_btn" onClick={() => appendNumber("6")}>
            6
          </button>
          <button className="calc_btn operation" onClick={() => chooseOperation("-")}>
            -
          </button>
        </div>

        <div className="calc_btn_row">
          <button className="calc_btn" onClick={() => appendNumber("1")}>
            1
          </button>
          <button className="calc_btn" onClick={() => appendNumber("2")}>
            2
          </button>
          <button className="calc_btn" onClick={() => appendNumber("3")}>
            3
          </button>
          <button className="calc_btn operation" onClick={() => chooseOperation("+")}>
            +
          </button>
        </div>

        <div className="calc_btn_row">
          <button className="calc_btn" onClick={() => appendNumber(".")}>
            .
          </button>
          <button className="calc_btn double" onClick={() => appendNumber("0")}>
            0
          </button>
          <button className="calc_btn" onClick={compute}>
            =
          </button>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
