/**
 * Exercise 1
 * https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
 */
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length <= 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  const htmlRegEx = /(< ?[a-z]+ ?>)/i;
  return !msg.match(htmlRegEx);
}
