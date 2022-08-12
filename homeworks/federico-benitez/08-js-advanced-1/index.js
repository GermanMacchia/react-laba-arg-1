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
