/**
 * https://github.com/qaprosoft/react-laba-arg-1/blob/main/lectures/08-js-advanced-1/task.md
 */
//Pluck
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

//Deep clone
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
