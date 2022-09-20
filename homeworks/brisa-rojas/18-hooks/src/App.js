import './App.css';
import { React, useState } from 'react';
import AddButton from './components/AddButton';
import AvatarTile from './components/AvatarTile';
import RefreshButton from './components/RefreshButton';
import errorImg from './error.jpg';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

function App() {
  const [avatars, setAvatars] = useState([]);

  async function getImage() {
    return fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('image could not be fecthed');
        }
      })
      .then((data) => {
        return data[0].url;
      })
      .catch((e) => {
        return errorImg;
      });
  }

  async function addAvatar() {
    let newAvatars = [...avatars];
    let newAvatar = await getImage();
    newAvatars.push(newAvatar);
    setAvatars(newAvatars);
  }

  return (
    <div className="App">
      <div className="avatar-container">
        {avatars.map((avatar, index) => (
          <AvatarTile key={index} avatarURL={avatar} />
        ))}
      </div>
      <AddButton onClick={addAvatar} />
      <RefreshButton />
    </div>
  );
}

export default App;
