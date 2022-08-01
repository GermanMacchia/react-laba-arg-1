// task 1 Pluck

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function pluck(objectName, key) {
  let object = objectName;
  let keyToArray = key.split('.');
  for (let index = 0; index < keyToArray.length; index++) {
    if (!object) {
      return null;
    } else if (!object[keyToArray[index]]) {
      return null;
    }
    object = object[keyToArray[index]];
  }
  return object;
}

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Deep clone

const users = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function clone() {
  const deepCopy = JSON.parse(JSON.stringify(users));
  return deepCopy;
}

const clonedUser = clone(users);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// kata 4 Random dates

function randomDate(startDate, endDate) {
  const minValue = startDate.getTime();
  const maxValue = endDate.getTime();
  const timestamp = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  return new Date(timestamp);
}

console.log(randomDate(new Date(2021, 1, 23), new Date(2021, 2, 23)).toLocaleDateString());

// kata 5 Merged objects https://www.codewars.com/kata/merged-objects

function objConcat(array) {
  let merged = {};
  for (object of array) {
    for (keys in object) {
      merged[keys] = object[keys];
    }
  }
  return merged;
}

let object = [
  (a = { 1: '1', 2: '2', 3: '3' }),
  (b = { 3: '4', 5: '6', 6: '7', 7: '8' }),
  (c = { 5: '9', 8: '9', 6: '12', 23: '35' }),
];
