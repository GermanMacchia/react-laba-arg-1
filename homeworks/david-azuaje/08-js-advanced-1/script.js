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
  