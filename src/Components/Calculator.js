import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import classes from "./Calculator.module.css";


// Conmponent
const Calculator = () => {
  const [expression, setExpression] = useState("");

  // Numbers and operators onClick handlers
  const clickHandler = (e) => {
    setExpression((prev) => {
      if (prev.trim().length > 0) return (prev += e.target.value);
      else return e.target.value;
    });
  };

  // Assignment operator handler
  const submitHandler = () => {
    const result = Function("return " + expression)()
    setExpression(result)
  };

  // Clear field handler
  const clearHandler = () => {
    setExpression('')
  };

  return (
    <div className={classes.calculator_box}>
      <div className={classes.calculator_display}>
        <input
          defaultValue={expression}
          type="text"
          className={classes.input}
        />
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
        <Button onClick={clickHandler} value="*" />
        <Button onClick={clickHandler} value="/" />
        <Button onClick={submitHandler} className={classes.button} value="=" />
      </div>
    </div>
  );
};
export default Calculator;
