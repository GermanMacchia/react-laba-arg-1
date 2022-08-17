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

// Task 3 - setTimeout/setInterval

var i = 1;
let timer = setInterval(() => {
  console.log(`Elapsed time ${i} sec`);
  if (i === 5) {
    clearInterval(timer);
    console.log('Timer finished!');
  }
  i++;
}, 1000);

// Task 6 - Digit or not

let firstCharIsNumber = /^\d/g;
let firstCharWithSpace = /^\d/g;

let finalRegex = new RegExp(firstCharIsNumber.source + '|' + firstCharWithSpace.source);

function digitOrNot(str) {
  if (typeof str === 'string') {
    console.log('I am a String');

    if (str.match(finalRegex)) {
      return `The string "${str}" starts with a NUMBER`;
    }

    if (!str.match(finalRegex)) {
      return `The string "${str}" DO NOT starts with a NUMBER`;
    }
  }
}

const url = 'https://randomuser.me/api/?gender=female&results=10';

// ***** FETCH ***** //
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const info = data.results;
    console.log(info);

    for (let i = 0; i < info.length; i++) {
      let container = document.querySelector('#container');
      let userDiv = document.createElement('div');
      let userImg = document.createElement('img');
      let userName = document.createElement('p');
      userDiv.style.textAlign = 'center';
      userImg.src = `${info[i].picture.thumbnail}`;
      userImg.style.width = '50px';
      userImg.style.height = '50px';
      userName.innerHTML = `${info[i].name.first} ${info[i].name.last}`;
      container.appendChild(userDiv);
      userDiv.appendChild(userImg);
      userDiv.appendChild(userName);
    }
  })
  .catch((err) => console.log(err));


