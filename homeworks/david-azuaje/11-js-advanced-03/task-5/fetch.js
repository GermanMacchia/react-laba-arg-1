//Fetch

const root = document.querySelector(".root");
const fetchData = async () => {
  try {
    const url = "https://randomuser.me/api/?gender=female&results=10";
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    for (let user of results) {
      const fullName = `${user.name.first} ${user.name.last}`;
      const urlPicture = user.picture.medium;

      const img = document.createElement("img");
      const div = document.createElement("div");
      div.classList.add("cards");
      const text = document.createElement("p");
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
