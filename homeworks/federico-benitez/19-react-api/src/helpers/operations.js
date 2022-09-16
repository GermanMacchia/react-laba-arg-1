const getResult = (a, b, operation) => {
  if (operation === 'substract' || operation === 'divide') return operations[operation](b, a);

  return operations[operation](a, b);
};

const getMathSymbol = (operation) => {
  const symbols = {
    addition: '+',
    substract: '-',
    multiply: 'x',
    divide: '/',
  };
  return symbols[operation];
};

const addition = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const percent = (n) => n / 100;

const removeLastNumber = (number) =>
  parseInt(
    number
      .toString()
      .split('')
      .filter((_, i) => i !== number.toString().length - 1)
      .join(''),
  ) || 0;

const isMathOperation = (operation) => operations[operation];

const isAfterGetResult = (value) => isNaN(value.previous);

const isANewOperation = (state) => state.value === 0;

const operations = {
  addition,
  substract,
  multiply,
  divide,
  percent,
};

export { operations, isMathOperation, isAfterGetResult, isANewOperation, getResult, getMathSymbol, removeLastNumber };
