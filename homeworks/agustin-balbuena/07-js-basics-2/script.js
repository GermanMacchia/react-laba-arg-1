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
  let sequence = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] === ar[i + 1] + 1 || ar[i] === ar[i + 1] - 1) {
      sequence++;
    }
  }
  return sequence;
}

// 3 -> https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  let result;
  for (let i = bound; i <= bound; i--) {
    if (i == 0 || i == divisor) {
      break;
    }

    if (i % divisor == 0) {
      result = i;
      break;
    }
  }
  return result;
}

// 4 -> https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 == 0);
}
