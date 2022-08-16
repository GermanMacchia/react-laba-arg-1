let users = [];
let totalUsers = 10;
let firstName = [];
let lastName = [];
let picture = [];

let container = document.querySelector('.container');
// Create a new request object
let requestObj = new XMLHttpRequest();
// Configuration of the object to GET the API request
requestObj.open('GET', 'https://randomuser.me/api/?gender=female&results=10');

//requestObj.send();

requestObj.onload = function () {
  if (this.status != 200) {
    console.log(`Error`);
  } else {
    users = JSON.parse(requestObj.responseText).results;
    for (let person = 0; person < totalUsers; person++) {
      firstName.push(users[person].name.first);
      lastName.push(users[person].name.last);
      picture.push(users[person].picture.large);
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      container.appendChild(card);
      let img = document.createElement('img');
      img.src = `${picture[person]}`;
      card.appendChild(img);
      let names = document.createElement('p');
      names.innerHTML = `${firstName[person]} ${lastName[person]}`;
      card.appendChild(names);
    }
  }
};
