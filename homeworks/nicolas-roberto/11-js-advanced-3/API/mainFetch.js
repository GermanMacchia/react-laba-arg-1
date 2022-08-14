let users = [];
let totalUsers = 10;
let firstName = [];
let lastName = [];
let picture = [];

let container = document.querySelector('.container');

fetch('https://randomuser.me/api/?gender=female&results=10')
  .then((res) => res.json())
  .then((json) => {
    users = json.results;

    for (let person = 0; person < totalUsers; person++) {
      firstName.push(users[person].name.first);
      lastName.push(users[person].name.last);
      picture.push(users[person].picture.large);
      let printHtml = `<div class="card">
      <img src="${picture[person]}" alt="User picture" />
      <p>${firstName[person]} ${lastName[person]}</p>
        </div>`;
      container.innerHTML += printHtml;
    }
  });
