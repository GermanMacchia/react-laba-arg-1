// Kata 1 - Error Throwing - Error Handling #2 https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

const validateMessage = (msg) => {
  //checks if the message is "empty"
  if (msg == null) {
    throw new ReferenceError('Message is null!');
    //Checks if the message is a string
  } else if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    // Checks if the message length is equal to 0 or over 255
  } else if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
    // Checks if the message contains HTML-tag ( "<" or ">")
  } else if (msg.includes('<') && msg.includes('>')) {
    return false;
  }
  // Returns true at the end, if it's a valid string.
  return true;
};

// Kata 2 - Jokes you've been 'awaiting' for ... promise https://www.codewars.com/kata/5a353a478f27f244a1000076
