// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
    if (msg === null) throw ReferenceError('Message is null!')
    if (typeof msg !== "string") throw TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    if (msg.length > 255 || msg.length === 0) throw RangeError(`Message contains ${msg.length} characters!`)
    if (msg.includes("<") && msg.includes(">")) return false
    return true
  }

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
// was not able to access the api. i think the page is down... will try again another day.

// task 3 setTimeout/setInterval
let i = 1
let timePassed = setInterval(() => {
    console.log(`Elapsed time: ${i} sec`)
    i++
}, 1000)
setTimeout(() => { clearInterval(timePassed) }, 5000)

// task 5
// !!!
// TASK 5 IS INSIDE THE "TASK-5" DIRECTORY
// !!!

// task 6 Digit or not
const regexChecker = (str) => {
    if (str.match(/^\d/)) return true
    return false
}
