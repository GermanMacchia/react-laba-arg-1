//Task 2) Deep clone
const uuser = {
    username: "testuser1",
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const clone = users => JSON.parse(JSON.stringify(users));
  const clonedUser = clone(uuser);
  
  clonedUser.preferences.sound.maxValue = 70;
  
  console.log(
    uuser.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue
);
// false

//Optional
//Task 8) => https://www.codewars.com/kata/54834b3559e638b39d0009a2

class OnceNamedOne {
    constructor(firstName, lastName) {
      this.first = firstName;
      this.last = lastName;
    }
  
    get fullName() {
      return `${this.first} ${this.last}`;
    }
  
    get firstName() {
      return this.first;
    }
  
    get lastName() {
      return this.last;
    }
  }
  
const users = new OnceNamedOne("David", "Azuaje");
console.log(users.fullName);
  