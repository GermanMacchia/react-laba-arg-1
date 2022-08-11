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
