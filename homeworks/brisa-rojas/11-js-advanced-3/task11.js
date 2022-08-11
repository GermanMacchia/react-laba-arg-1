// 1 - KATA Error Throwing - Error Handling #2
// https://www.codewars.com/kata/55e7650c8d894146be000095/
function validateMessage(msg) {
  let htmlRegEx = /(< ?[a-z]+ ?>)/i;

  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  if (msg.match(htmlRegEx)) {
    return false;
  }
  return true;
}

console.log(validateMessage('Hello World!'));
console.log(validateMessage('<b>Hello World!</b>'));
//console.log(validateMessage(null)); // ReferenceError: Message is null!
//console.log(validateMessage(123)); // TypeError: Message should be of type string but was of type number!
// console.log(validateMessage('')); // RangeError: Message contains 0 characters!

// 2 - KATA Jokes you've been 'awaiting' for ... promise
// https://www.codewars.com/kata/5a353a478f27f244a1000076/solutions/javascript?filter=me&sort=best_practice

async function sayJoke(apiUrl, jokeId) {
  return await fetch(apiUrl)
    .then(response.json())
    .then(({ jokeList }) =>
      jokeList ? jokeList.find((joke) => joke.id === jokeId) : Promise.reject(new Error(`No jokes at url: ${apiUrl}`)),
    ) 
    .then((joke) =>
      joke
        ? { saySetup: () => joke.setup, sayPunchLine: () => joke.punchLine }
        : Promise.reject(new Error(`No jokes found id: ${jokeId}`)),
    );
}

// 3 - setTimeout/setInterval

// 5 - Fetch API/XMLHttpRequest

// 6 - Digit or not
// Write a function that receives a variable containing a string, as a parameter and checks whether the contents of this variable begin with a digit or not, using a regular expression.
function beginsWithDigit(str) {
  const regex = new RegExp(/^\d/);
  return regex.test(str);
}
console.log(beginsWithDigit('Hello World!'));
console.log(beginsWithDigit('1Hello World!'));
console.log(beginsWithDigit('37'));
console.log(beginsWithDigit(''));
console.log(beginsWithDigit('Th1s sh0uld b3 f4ls3'));

// 7 - Optional (advanced)
//Check if this entry is a phone number, e.g. set the format of your country:
//Argentina: +54 xxx-xxxx-xxx
function isPhoneNumber(str) {
  const regex = new RegExp(/^[+]{0,1}54[\s-]{0,1}\d{3}[\s-]{0,1}\d{4}[\s-]{0,1}\d{3}$/);
  return regex.test(str);
}

console.log(isPhoneNumber('+54 987-6543-210'));
console.log(isPhoneNumber('549876543210'));
console.log(isPhoneNumber('54 9876543210'));



