/**
 * Exercise 1
 * https://www.codewars.com/kata/5715eaedb436cf5606000381
 */
function positiveSum(arr) {
  return arr.reduce((prev, curr) => {
    if (curr > 0) {
      return prev + curr;
    }
    return prev + 0;
  }, 0);
}

/**
 * Exercise 2
 * https://www.codewars.com/kata/5a3e1319b6486ac96f000049
 */
function pairs(arr) {
  let count = 0;
  arr.reduce((prev, curr, currIndex) => {
    if (currIndex > 0 && currIndex % 2 !== 0) {
      if (prev === curr - 1 || prev === curr + 1) {
        count++;
      }
    }
    return curr;
  }, 0);

  return count;
}

/**
 * Exercise 3
 * https://www.codewars.com/kata/5aba780a6a176b029800041c
 */

/**
 * Exercise 4
 * https://www.codewars.com/kata/514a6336889283a3d2000001
 */
function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter((num) => num % 2 === 0);
}
