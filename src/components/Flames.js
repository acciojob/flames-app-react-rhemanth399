import React, { useState } from "react";
import './../styles/App.css';

const Flames = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name1") {
      setName1(value);
    } else {
      setName2(value);
    }
  };

  const calculateFlames = () => {
    if (!name1 || !name2) {
      setResult("Please enter valid input");
      return;
    }
    const name1Arr = name1.split("");
    const name2Arr = name2.split("");
    const commonLetters = [];
    for (let i = 0; i < name1Arr.length; i++) {
      const index = name2Arr.indexOf(name1Arr[i]);
      if (index !== -1) {
        commonLetters.push(name1Arr[i]);
        name2Arr.splice(index, 1);
      }
    }
    const remainingLettersCount = name1Arr.length + name2Arr.length - commonLetters.length * 2;
    const flames = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    setResult(flames[remainingLettersCount % 6]);
  };

  const clearInputs = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div>
      <label htmlFor="input1">First Name:</label>
      <input type="text" name="name1" id="input1" data-testid="input1" value={name1} onChange={handleInputChange} />
      <label htmlFor="input2">Second Name:</label>
      <input type="text" name="name2" id="input2" data-testid="input2" value={name2} onChange={handleInputChange} />
      <button onClick={calculateFlames} data-testid="calculate_relationship">Calculate Relationship Future</button>
      <button onClick={clearInputs} data-testid="clear">Clear</button>
      {result && <h3 data-testid="answer">{result}</h3>}
    </div>
  );
};

export default Flames;
