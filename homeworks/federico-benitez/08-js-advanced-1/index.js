//1. Pluck
function solution1() {
  const user = {
    username: 'testuser1',
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const randomValue = Math.random();
  const nullValue = null;

  function pluck(obj, key) {
    if (typeof obj === 'object' && obj !== null) {
      const path = key.split('.');
      let res = null;

      path.forEach((key) => {
        if (typeof res === 'object' && res !== null) {
          res = getValue(res, key);
        } else {
          res = getValue(obj, key);
        }
      });

      return res;
    }

    function getValue(obj, key) {
      if (obj[`${key}`]) {
        return obj[`${key}`];
      }

      return null;
    }

    return null;
  }

  console.log(pluck(user, 'preferences.sound.value')); // 30
  console.log(pluck(user, 'unknown.key')); // null
  console.log(pluck(randomValue, 'unknown.key')); // null
  console.log(pluck(nullValue, 'unknown.key')); // null
}

//2. Deep clone
function solution2() {
  const user = {
    username: 'testuser1',
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const clonedUser = clone(user);

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  clonedUser.preferences.sound.maxValue = 70;

  console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false
}

//3. A long time ago
function offset(arrayDate) {
  const [givenDate, _] = arrayDate;
  const current = new Date();
  const diffMilliseconds = current - givenDate;

  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

  let seconds = Math.floor(diffMilliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function moment(date, format) {
  const [days, month, year] = date.split(' ')[0].split('/');

  if (date.split(' ').length > 1) {
    const hours = date.split(' ')[1];
    const givenDate = new Date(`${year}-${month}-${days}T${hours}`);

    return [givenDate, format];
  } else {
    return new Date(`${year}-${month}-${days}`);
  }
}

console.log(offset(moment('16/08/2021 06:35:30', 'DD/MM/YYYY hh:mm:ss')));

//4.Random dates
