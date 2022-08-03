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
