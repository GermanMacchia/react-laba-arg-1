export const numberClick = (btnValue, calcNum) => {
  const inputToString = btnValue.toString();
  const inputValue = Number(calcNum + inputToString);
  return inputValue;
};
