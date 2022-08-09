// Task 1 - Kata https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

const validateMessage = (msg) => {
  if (msg == null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.match(/(< ?[a-z]+ ?>)/i)) {
    return false;
  }
  return true;
};

//Task 3 - setTimeout/setInterval

// var i = 1;
// let timer = setInterval(() => {
//   console.log(`Elapsed time ${i} sec`);
//   if (i === 5) {
//     clearInterval(timer);
//     console.log('Timer finished!');
//   }
//   i++;
// }, 1000);

// Task 6 - Digit or not

let firstCharIsNumber = /([0-9])\w+/g;
let firstCharWithSpace = /([0-9])\s/g;

let finalRegex = new RegExp(firstCharIsNumber.source + '|' + firstCharWithSpace.source);

function digitOrNot(str) {
  if (typeof str === 'string') {
    console.log('I am a String');

    if (str.match(finalRegex)) {
      return `The string "${str}" starts with a NUMBER`;
    }

    if (!str.match(finalRegex)) {
      return `The string "${str}" NO starts with a NUMBER`;
    }
  }
}


