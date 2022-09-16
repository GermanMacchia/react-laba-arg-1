const getResult = (a, b, operation) => {
  if (operation === 'substract' || operation === 'diviide') return operations[operation](b, a);

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

const operations = {
  addition,
  substract,
  multiply,
  divide,
};

const isMathOperation = (operation) => operations[operation];

export { operations, isMathOperation, getResult, getMathSymbol };
