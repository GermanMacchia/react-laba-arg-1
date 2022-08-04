//1. [Error Throwing - Error Handling #2](https://www.codewars.com/kata/55e7650c8d894146be000095/javascript)
function validateMessage(msg) {
  const MSG_NULL_ERROR = "Message is null!";
  const MSG_TYPE = `Message should be of type string but was of type ${typeof msg}!`;
  let regEx = new RegExp(/<[^>]*>/g);
  let flag = true;

  if (msg === null) throw new ReferenceError(MSG_NULL_ERROR);
  if (typeof msg !== "string") throw new TypeError(MSG_TYPE);
  if (msg.length > 255 || msg.length === 0) throw new RangeError(`Message contains ${msg.length} characters!`);
  if (regEx.test(msg)) flag = false;

  return flag;
}

// 2. [Jokes you've been 'awaiting' for ... promise](https://www.codewars.com/kata/5a353a478f27f244a1000076)
