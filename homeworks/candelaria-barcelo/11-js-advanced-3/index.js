// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
    if (msg === null) throw ReferenceError('Message is null!')
    if (typeof msg !== "string") throw TypeError(`Message should be of type string but was of type ${typeof msg}!`)
    if (msg.length > 255 || msg.length === 0) throw RangeError(`Message contains ${msg.length} characters!`)
    if (msg.includes("<") && msg.includes(">")) return false
    return true
  }

// task 2 


// task 3 setTimeout/setInterval
let i = 1
let timePassed = setInterval(() => {
    console.log(`Elapsed time: ${i} sec`)
    i++
}, 1000)
setTimeout(() => { clearInterval(timePassed) }, 5000)
timePassed()

