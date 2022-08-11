/**
 * Exercise 1 - Opposite number
 * http://www.codewars.com/kata/opposite-number
 */

function opposite(number) {
  return number * -1;
}

/**
 * Exercise 2 - Basic Mathematical Operations
 * http://www.codewars.com/kata/basic-mathematical-operations
 */

function basicOp(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error(`Operator ${operation} not implemented `);
  }
}

/**
 * Exercise 3 - Printing Array elements with Comma delimiters
 * https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 */

function printArray(array) {
  return array.join(',');
}

/**
 * Exercise 4 - Transportation on vacation
 * https://www.codewars.com/kata/transportation-on-vacation
 */

function rentalCarCost(days) {
  const COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  let price = days * COST_PER_DAY;

  if (days >= 3 && days < 7) price -= SMALL_DISCOUNT;

  if (days >= 7) price -= BIG_DISCOUNT;

  return price;
}

/**
 * Exercise 5 - Calculating with functions
 * http://www.codewars.com/kata/calculating-with-functions
 */

function zero(operation) {
  return getResult(operation, 0);
}
function one(operation) {
  return getResult(operation, 1);
}
function two(operation) {
  return getResult(operation, 2);
}
function three(operation) {
  return getResult(operation, 3);
}
function four(operation) {
  return getResult(operation, 4);
}

function five(operation) {
  return getResult(operation, 5);
}

function six(operation) {
  return getResult(operation, 6);
}

function seven(operation) {
  return getResult(operation, 7);
}

function eight(operation) {
  return getResult(operation, 8);
}
function nine(operation) {
  return getResult(operation, 9);
}

function plus(value) {
  return value;
}
function minus(value) {
  return value * -1;
}
function times(value) {
  return [...Array(value)].map(() => value);
}
function dividedBy(value) {
  return times(value).map((n) => n * -1);
}

function getResult(operation, VALUE) {
  if (!operation) return VALUE;

  if (Array.isArray(operation)) {
    if (operation[0] < 0) {
      return divide(operation, VALUE);
    }
    return multiply(operation, VALUE);
  } else {
    return VALUE + operation;
  }
}

function divide(array, initial) {
  let result = 0;
  let operator = initial;

  while (operator > array[0]) {
    if (operator < array[0] * -1) break;
    operator = operator + array[0];
    result++;
  }
  return result;
}

function multiply(array, value) {
  return value * array.length;
}

/**
 * Exercise 6
 * https://www.codewars.com/kata/get-the-middle-character
 */

function getMiddle(s) {
  if (s.length % 2 === 1) return s[Math.floor(s.length / 2)];

  const middle = s.length / 2;
  return `${s[middle - 1]}${s[middle]}`;
}

/**
 * Exercise 7
 * http://www.codewars.com/kata/partition-on
 */
function partitionOn(pred, items) {
  items.sort((a, b) => {
    if (pred(a) > pred(b)) {
      return 1;
    } else if (pred(b) > pred(a)) {
      return -1;
    }

    return 0;
  });

  return items.findIndex(pred);
}

/**
 * Exercise 8
 * https://www.codewars.com/kata/word-count
 * TODO: resolve
 */

/* ----- 404 not found ---- */

/**
 * Exercise 9 - Find the odd int
 * https://www.codewars.com/kata/find-the-odd-int/
 */
function findOdd(A) {
  //happy coding!
  let odd = {};

  A.forEach((v) => {
    let coincidences = A.map((x) => {
      if (x === v) {
        return x;
      }
    }).filter(Boolean);

    if (!odd.count) {
      odd = {
        count: coincidences.length,
        value: coincidences[0],
      };
    } else if (coincidences.length < odd.count) {
      odd = {
        count: coincidences.length,
        value: coincidences[0],
      };
    }
  });

  return odd.value;
}

/**
 * Exercise 10
 * https://www.codewars.com/kata/find-the-parity-outlier
 */

function findOutlier(integers) {
  const evens = integers.filter((n) => n % 2 === 0);
  const odds = integers.filter((n) => n % 2 !== 0);

  if (evens.length === 1) return evens[0];

  return odds[0];
}

/**
 * Exercise 11 - zipWith
 * https://www.codewars.com/kata/zipwith
 */

function zipWith(fn, a0, a1) {
  const shorter = a0.length < a1.length ? a0 : a1;

  return shorter.map((_, i) => fn(a0[i], a1[i]));
}

/**
 * Exercise 12 Filter the number
 * https://www.codewars.com/kata/filter-the-number
 */

function FilterString(value) {
  return Number(
    value
      .split('')
      .filter((v) => !isNaN(v))
      .join(''),
  );
}

/**
 * Exercise 13 - n-th Fibonacci
 * https://www.codewars.com/kata/n-th-fibonacci
 */

function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n - 1];
}

/**
 * Exercise 14 - Cat and Mouse - 2D Version
 * https://www.codewars.com/kata/cat-and-mouse-2d-version/
 */

function catMouse(map, moves) {
  const mouseCoords = findCoordinates(map, 'm');
  const catCoords = findCoordinates(map, 'C');

  if (!mouseCoords || !catCoords) return 'boring without two animals';

  if (areCloser(catCoords, mouseCoords, moves)) return 'Caught!';

  return 'Escaped!';
}

function areCloser(cat, mouse, moves) {
  const { x: x1, y: y1 } = cat;
  const { x: x2, y: y2 } = mouse;
  return Math.hypot(Math.abs(x2 - x1), Math.abs(y2 - y1)) <= moves;
}

function findCoordinates(map, animal) {
  const array2d = map.split(/\r?\n/);
  let cords;
  array2d.forEach((line, index) => {
    const x = line.split('').findIndex((char) => char === animal);
    if (x !== -1) {
      cords = {
        x,
        y: index,
      };
    }
  });
  return cords;
}

/**
 * Exercise 15 - Duplicate Encoder
 * https://www.codewars.com/kata/duplicate-encoder
 */
function duplicateEncode(word) {
  const chars = word.split('');
  let result = word;

  chars.forEach((char) => {
    if (chars.filter((c) => c.toLowerCase() === char.toLowerCase()).length > 1) {
      result = result.replace(char, ')');
    } else {
      result = result.replace(char, '(');
    }
  });

  return result;
}
