const xhr = new XMLHttpRequest();
let url = "https://randomuser.me/api/?gender=female&results=10";
xhr.open("get", url);

const root = document.querySelector(".root");

xhr.addEventListener("load", () => {
  if (xhr.status == 200) {
    let { results } = JSON.parse(xhr.response);
    try {
      for (let user of results) {
        let fullName = user.name.first + " " + user.name.last;
        let urlPicture = user.picture.medium;

        let img = document.createElement("img");
        let div = document.createElement("div");
        div.classList.add("cards");
        let text = document.createElement("p");
        text.innerText = fullName;
        img.setAttribute("src", urlPicture);
        div.append(img);
        div.append(text);
        root.append(div);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
});

xhr.send();
