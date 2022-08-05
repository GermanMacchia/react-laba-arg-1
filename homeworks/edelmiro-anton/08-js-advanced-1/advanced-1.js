// Task 2 - Create a deep clone function

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function clone(obj) {
  const deepClone = JSON.parse(JSON.stringify(obj));
  return deepClone;
}

const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// Task 3 - Create a function that returns how long ago a certain day was.

let date1 = new Date(2021, 01, 23, 14, 00, 00); // 23/02/2021 14:00:00
let date2 = new Date(2021, 01, 23, 13, 30, 00); // 23/02/2021 13:30:00
let date3 = new Date(2021, 01, 23, 13, 00, 00); // 23/02/2021 13:00:00
let date4 = new Date(2021, 01, 23, 11, 30, 00); // 23/02/2021 11:30:00
let date5 = new Date(2021, 01, 22, 14, 00, 00); // 23/02/2021 11:30:00
let date6 = new Date(2020, 01, 23, 10, 00, 00); // 23/02/2021 11:30:00

function offset(date1, date2) {
  let milisec1 = date1.getTime();
  let milisec2 = date2.getTime();
  let seconds = (milisec1 - milisec2) / 1000;
  let minutes = seconds / 60;
  let hours = Math.trunc(minutes / 60);
  let days = Math.trunc(hours / 24);
  let years = days / 365;

  let wordMinute = ' minute';
  if (minutes > 1) {
    wordMinute = ' minutes';
  }

  let wordHour = ' hour';
  if (hours > 1) {
    wordHour = ' hours';
  }

  let wordDay = ' day';
  if (days > 1) {
    wordDay = ' days';
  }

  let timeAgo = '';

  if (minutes > 0 && minutes < 60) {
    return (timeAgo = minutes + wordMinute + ' ago');
  }
  if (hours == 1) {
    return (timeAgo = hours + ' hour ago');
  }

  if (hours == 2) {
    return (timeAgo = hours + ' hours ' + minutes / 5 + ' minutes ago');
  }
  if (hours >= 24) {
    return (timeAgo = days + wordDay + ' ago');
  }

  if (days >= 365) {
    return (timeAgo = days + ' days ago ');
  }
}

// Task 4 - Create a function that generate a random date between to dates

const date_1 = new Date(2021, 0, 23);
const date_2 = new Date(2021, 1, 23);

function randomDate(firstDate, secondDate) {
  let date = new Date(firstDate.getTime() + Math.random() * (secondDate.getTime() - firstDate.getTime()));
  const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;
  day;

  const month = `${date.getMonth() < 10 ? '0' : ''}${date.getMonth() + 1}`;
  month;

  const year = `${date.getFullYear()}`;
  year;

  return `${day}/${month}/${year}`;
}

// Task 5 - https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript

function objConcat(arr) {
  let finalObj = {};
  for (i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      finalObj[key] = arr[i][key];
    }
  }
  return finalObj;
}

// Task 6 - https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },

    set(value) {
      value = value.trim();
      if (value.includes(' ')) {
        let fullName = value.split(' ');
        this.firstName = fullName[0];
        this.lastName = fullName[1];
        value = fullName.join(' ');
      }
    },
  });
}

// let objj = {
//   _password: '827313',

//   get password() {
//     return this._password;
//   },

//   set password(value) {
//     if (value.length < 4) {
//       throw new Error('CONTRASEÑA CORTA');
//     }
//     this._password = '*'.repeat(value.length);
//   },
// };

// objj.password = '22233';
// console.log(objj.password);
