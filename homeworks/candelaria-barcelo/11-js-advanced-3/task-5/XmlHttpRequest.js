let users = {};
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    document.getElementsByTagName('main')[0].innerText = '';
    users = JSON.parse(xhr.responseText).results;
    for (let i = 0; i < 10; i++) {
      let card = document.createElement('div');
      card.setAttribute('id', i);
      document.body.getElementsByTagName('main')[0].appendChild(card);

      let picture = document.createElement('img');
      picture.setAttribute('src', users[i].picture.large);
      let fullName = document.createElement('h2');
      fullName.innerText = users[i].name.first + ' ' + users[i].name.last;

      document.getElementById(i).appendChild(picture);
      document.getElementById(i).appendChild(fullName);
    }
  } else {
    document.getElementsByTagName('main')[0].innerText = 'Loading...';
  }
};
xhr.open('GET', 'https://randomuser.me/api/?gender=female&results=10');
xhr.send();
