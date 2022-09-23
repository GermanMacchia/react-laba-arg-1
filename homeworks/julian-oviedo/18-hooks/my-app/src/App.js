import { React, useState } from 'react';
import refreshImg from './assets/images/refresh.svg';
import './App.css';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

function App() {
  const [avatars, setAvatars] = useState([]);

  async function getAvatar() {
    const res = await fetch(URL);
    return res.json().then((data) => {
      return data[0].url;
    });
  }

  async function addAvatar() {
    const newAvatar = await getAvatar();
    const newList = [...avatars, newAvatar];
    setAvatars(newList);
  }

  async function refreshClickedAvatar(avatarId) {
    const newAvatar = await getAvatar();
    let newList = avatars.map((avatar, index) => {
      if (index === avatarId) {
        return newAvatar;
      }
      return avatar;
    });
    setAvatars(newList);
  }

  async function refreshAllAvatars() {
    let newList = await Promise.all(
      avatars.map(() => {
        return getAvatar();
      }),
    );
    setAvatars(newList);
  }

  return (
    <div className="App">
      <div className="cards-container">
        {avatars.map((avatar, index) => {
          return (
            <div className="card" key={index}>
              <img className="card__avatar" src={avatar} alt=""></img>
              <img
                className="card__refresh-icon"
                src={refreshImg}
                onClick={() => refreshClickedAvatar(index)}
                alt=""
              ></img>
            </div>
          );
        })}
        <button className="bttn-add" onClick={addAvatar}>
          +
        </button>
      </div>
      <div className="bttn-container">
        <button className="bttn-container__refresh-all" onClick={refreshAllAvatars}>
          REFRESH ALL
        </button>
      </div>
    </div>
  );
}

export default App;
