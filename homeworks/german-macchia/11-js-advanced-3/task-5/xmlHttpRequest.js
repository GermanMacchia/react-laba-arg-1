const xhr = new XMLHttpRequest();

xhr.open("get", api);

xhr.addEventListener("load", () => {
  if (xhr.status == 200) {
    let { results } = JSON.parse(xhr.response);
    const GRID = document.querySelector(".imposter__grid--test");
    for (let user of results) {
      let imgUrl = user.picture.thumbnail;
      let name = user.name.first + " " + user.name.last;
      let img = document.createElement("img");
      let div = document.createElement("div");
      let text = document.createElement("p");
      text.innerText = name;
      img.setAttribute("src", imgUrl);
      img.setAttribute("alt", name + " photo");
      div.append(img);
      div.append(text);
      GRID.append(div);
      console.log(`XHR TESTERS => ${name}`);
    }
  } else {
    console.error("ERROR XHR cb (status)", xhr.status);
  }
});

xhr.addEventListener("error", (e) => {
  console.error("ERROR XHR cb (ajax)", e);
});

xhr.send();
