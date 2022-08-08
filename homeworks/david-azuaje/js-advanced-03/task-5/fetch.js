//Fetch

const root = document.querySelector(".root");
const fetchData = async () => {
  try {
    let url = "https://randomuser.me/api/?gender=female&results=10";
    const response = await fetch(url);
    const data = await response.json();
    let results = data.results;

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
    console.log(error);
  }
};

fetchData();
