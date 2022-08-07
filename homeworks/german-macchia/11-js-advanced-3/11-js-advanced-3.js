//1. [Error Throwing - Error Handling #2](https://www.codewars.com/kata/55e7650c8d894146be000095/javascript)
function validateMessage(msg) {
  const MSG_NULL_ERROR = "Message is null!";
  const MSG_TYPE = `Message should be of type string but was of type ${typeof msg}!`;
  let regEx = new RegExp(/<[^>]*>/g);
  let flag = true;

  if (msg === null) throw new ReferenceError(MSG_NULL_ERROR);
  if (typeof msg !== "string") throw new TypeError(MSG_TYPE);
  if (msg.length > 255 || msg.length === 0)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  if (regEx.test(msg)) flag = false;

  return flag;
}

// 2. [Jokes you've been 'awaiting' for ... promise](https://www.codewars.com/kata/5a353a478f27f244a1000076)
async function sayJoke(apiUrl, jokeId) {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then(({ jokes }) =>
      jokes
        ? jokes.find((joke) => joke.id === jokeId)
        : Promise.reject(new Error(`No jokes at url: ${apiUrl}`))
    )
    .then((joke) =>
      joke
        ? { saySetup: () => joke.setup, sayPunchLine: () => joke.punchLine }
        : Promise.reject(new Error(`No jokes found id: ${jokeId}`))
    );
}

// 3. setTimeout/setInterval
function displayElapsedTime() {
  let sec = 1;
  return setInterval(() => {
    console.log(`Elapsed Time: ${sec} sec`);
    sec++;
  }, 1000);
}

let display = displayElapsedTime();
setTimeout(() => clearInterval(display), 6000);

//4. Event Loop




//5.Fetch API/XMLHttpRequest

/********IN FOLDER "TASK-5" *********/


