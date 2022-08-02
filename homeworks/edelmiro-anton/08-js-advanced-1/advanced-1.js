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
