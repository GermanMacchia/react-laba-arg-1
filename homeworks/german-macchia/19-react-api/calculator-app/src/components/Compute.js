import React, { useEffect, useState } from "react";

export const Compute = ({ command, press }) => {
  const [resolution, setResolution] = useState("");
  const [calculation, setCalculation] = useState("");

  const isEmpty = (string) => string === "";
  //Delete last value of calculation field
  const backspace = () => {
    const newValue = calculation.slice(0, -1);
    setCalculation(newValue);
  };
  //Clear calculation field, if it's empty, sets resolution field to 0
  const clear = () => {
    if (isEmpty(calculation)) {
      setResolution(0);
    }
    setCalculation("");
  };
  //Sets calculation field ready to compute solution
  const resolve = async () => {
    //Set regex for not numbers and dot
    const regex = /[^0-9.]/g;
    //Split calculation string on each char and return values that are not numbers nor dots (operators)
    const signs = calculation.split("").filter((value) => regex.test(value));
    //split string were there are not numbers or dot
    const nums = calculation.split(regex);

    //If it is allready a previous resolution and first character it's an operator
    //As the nums value will be splited at first with empty value e.g ["", 23]
    //will put the previous resolution as first value for compute
    if (regex.test(calculation.charAt(0))) {
      nums[0] = resolution;
    }
    //After last condition, if there still no value at index 0 (no resolution),
    //will put a 0 to compute operations
    if (isEmpty(nums[0])) {
      nums[0] = 0;
    }
    //If we put an lonely operator will put this values to compute
    if (isEmpty(nums[1])) {
      nums[0] = resolution || 0;
      nums[1] = 1;
    }

    //each value of the calculation field will be processed in order of input
    //(not in mathematical order of operation )
    let j = 0;
    let result;

    for (let i = 0; i <= signs.length; i++) {
      if (result && nums[i]) {
        result = compute(result, signs[j], nums[i]);
        i++;
      } else {
        result = compute(nums[i], signs[j], nums[i + 1]);
        i++;
      }
      j++;
    }

    setResolution(result);
    clear();
  };

  const compute = (first, op, second) => {
    let num1 = parseFloat(first);
    let num2 = parseFloat(second);
    let res;
    switch (op) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          res = num1 / num2;
        } else {
          res = "error";
        }
        break;
      default:
        res = num1;
        break;
    }
    return res;
  };

  useEffect(() => {
    //If last char in calculation string & command are a non digit value
    //and also command is NOT a 'equal, delete, or clear' command value
    //Then, replace that last operator command
    if (
      /\D/g.test(calculation.slice(-1)) &&
      /\D/g.test(command) &&
      /[^CD=]/g.test(command)
    ) {
      setCalculation(calculation.slice(0, -1) + command);
      return;
    }

    //Swich command of 'equal, delete, or clear' if exists
    switch (command) {
      case "=":
        resolve();
        return;
      case "D":
        backspace();
        return;
      case "C":
        clear();
        return;
      default:
        break;
    }

    //set max 17 char length in calculation
    if (calculation.length < 17) {
      setCalculation(calculation + command);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command, press]);

  return (
    <div className="display">
      <div
        className={
          resolution.toString().length > 9
            ? "display__resolution display__resolution--small"
            : "display__resolution"
        }
      >
        <h1>{resolution.toString().slice(0, 12)}</h1>
      </div>
      <div className="display__calculation">
        <h1>{calculation}</h1>
      </div>
    </div>
  );
};
