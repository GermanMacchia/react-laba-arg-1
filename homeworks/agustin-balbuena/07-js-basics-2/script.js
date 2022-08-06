// 1 -> https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sum = 0;
  arr.map((element) => {
    if (element > 0) {
      sum += element;
    }
  });
  return sum;
}

// 2 -> https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let counter = 0;
  let actualChar = null;
  let lastChar = '';
  let consecutives = 0;
  for (let i = 0; i < ar.length; i++) {
    actualChar = ar[i];

    if (actualChar === lastChar + 1 || actualChar === lastChar - 1) {
      //they're consecutives
      consecutives++;
    }

    counter++;

    lastChar = ar[i];

    if (counter === 2) {
      counter = 0;
      actualChar = null;
      lastChar = '';
    }
  }
  return consecutives;
}
