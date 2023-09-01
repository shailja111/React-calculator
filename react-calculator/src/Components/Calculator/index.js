import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const validateInput = () => {
    if (input1 == "" || input2 == "" || isNaN(input1) || isNaN(input2)) {
      setError("Please enter a valid number");
      return false;
    }
    setError(null);
    return true;
  };

  const add = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  };

  const subtract = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) - parseFloat(input2));
    }
  };

  const multiply = () => {
    if (validateInput()) {
      setResult(parseFloat(input1) * parseFloat(input2));
    }
  };

  const divide = () => {
    if (validateInput()) {
      if (input2 !== "0") {
        setResult(parseFloat(input1) / parseFloat(input2));
      } else {
        setError("Division by zero is not allowed!!");
      }
    }
  };
  return (
    <div className="flex flex-col gap-8 justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% items-center my-96 mx-96 w-96 h-96  shadow-lg shadow-red-500 md:shadow-xl md:shadow-red-500 rounded-2xl pt-2 border-solid border-2 border-indigo-600 ">
      <h1 className="font-bold">React Calculator</h1>

      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="border-solid border-2 border-indigo-600 text-center"
        placeholder="Num 1"
      />

      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="border-solid border-2 border-indigo-600 text-center"
        placeholder="Num 2"
      />
      <div className="gap-5 flex ">
        <button
          className="border-double border-4 border-indigo-600 px-3  "
          onClick={add}
        >
          +
        </button>
        <button
          className="border-double border-4 border-indigo-600 px-3"
          onClick={subtract}
        >
          -
        </button>
        <button
          className="border-double border-4 border-indigo-600 px-3"
          onClick={multiply}
        >
          *
        </button>
        <button
          className="border-double border-4 border-indigo-600 px-3"
          onClick={divide}
        >
          /
        </button>
      </div>
      {error && <div>{error ? error : null}</div>}
      {result && (
        <div className="text-green-950">
          {result != null ? ` Result: ${result}` : null}
        </div>
      )}
    </div>
  );
};

export default Calculator;
