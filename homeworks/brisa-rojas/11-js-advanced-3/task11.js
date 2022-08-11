// KATA Error Throwing - Error Handling #2
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

// KATA Jokes you've been 'awaiting' for ... promise
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
