import { useState } from "react";
import Button from "./Button";
import classes from "./Calculator.module.css";

// A function to display the clicked number in the input field
const displayInput = function (e) {
  document.getElementById("input").value += e.target.value;
};

//  A function to get the input field expression
const getExpression = function () {
  const expression = document.getElementById("input").value;
  const answer = eval(expression);
  document.getElementById("input").value = answer;
};

//  A function to clear the input field 
const clearInput = function (e) {
  document.getElementById("input").value = " ";
};

// Conmponent
const Calculator = () => {
  // Numbers and operators onClick handlers
  const clickHandler = (e) => {
    displayInput(e);
  };

  // Assignment operator handler
  const submitHandler = () => {
    if(document.getElementById("input").value.trim().length === 0) return alert`Enter a number`
    getExpression();
  };

  // Clear field handler
  const clearHandler = () => {
    clearInput();
  };

  return (
    <div className={classes.calculator_box}>
      <div className={classes.calculator_display}>
        <input id="input" type="text" className={classes.input} />
      </div>
      <div className={classes.calculator_row}>
        <Button onClick={clickHandler} value="7" />
        <Button onClick={clickHandler} value="8" />
        <Button onClick={clickHandler} value="9" />
        <Button onClick={clearHandler} className={classes.button} value="C" />
      </div>
      <div className={classes.calculator_row}>
        <Button onClick={clickHandler} value="4" />
        <Button onClick={clickHandler} value="5" />
        <Button onClick={clickHandler} value="6" />
        <Button onClick={clickHandler} value="-" />
      </div>
      <div className={classes.calculator_row}>
        <Button onClick={clickHandler} value="1" />
        <Button onClick={clickHandler} value="2" />
        <Button onClick={clickHandler} value="3" />
        <Button onClick={clickHandler} value="+" />
      </div>
      <div className={classes.calculator_row}>
        <Button onClick={clickHandler} value="0" />
        <Button onClick={clickHandler}  value="*" />
        <Button onClick={clickHandler}  value="/" />
        <Button onClick={submitHandler} className={classes.button} value="=" />
      </div>
    </div>
  );
};
export default Calculator;
