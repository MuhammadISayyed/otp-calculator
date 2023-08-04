let num1;
let num2;
let operator;

// Selecting everything.
let display = document.getElementById("display");
const current = document.getElementsByClassName("current");
const previous = document.getElementsByClassName("previous");
const numbersButtons = Array.from(document.getElementsByClassName("num"));
const operationButtons = document.getElementsByClassName("operation-btn");
const clear = document.getElementsByClassName("clear-btn");
const equal = document.getElementsByClassName("equal-btn");

const add = function (num1, num2) {
  return num1 + num2;
};
console.log(add(11, 7));
const substract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const operate = function (num1, num2, operator) {
  if (operator === "+") {
    const addNumbers = add(num1, num2);
    return addNumbers;
  } else if (operator === "-") {
    const substractNumbers = substract(num1, num2);
    return substractNumbers;
  } else if (operator === "*") {
    const multiplyNumbers = multiply(num1, num2);
    return multiplyNumbers;
  } else if (operator === "/") {
    const divideNumbers = divide(num1, num2);
    return divideNumbers;
  } else {
    console.log("There was an error.");
    return false;
  }
};
