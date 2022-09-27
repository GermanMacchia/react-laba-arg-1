import React from 'react';
import refreshImg from './assets/images/refresh.svg';
import './App.css';
import fetchErrorImg from './assets/images/fetchErrorImg.svg';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatars: [],
    };
    this.addAvatar = this.addAvatar.bind(this);
    this.refreshAllAvatars = this.refreshAllAvatars.bind(this);
    this.refreshClickedAvatar = this.refreshClickedAvatar.bind(this);
    this.getAvatar = this.getAvatar.bind(this);
  }

  getAvatar() {
    return fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Something went wrong please try again later');
      })
      .then((dataJson) => {
        return dataJson[0].url;
      })
      .catch((err) => {
        console.log(err);
        return fetchErrorImg;
      });
  }

  async addAvatar() {
    const newAvatar = await this.getAvatar();
    this.setState((state) => {
      const newList = [...state.avatars, newAvatar];
      return { avatars: newList };
    });
  }

  async refreshAllAvatars() {
    let newList = await Promise.all(
      this.state.avatars.map(() => {
        return this.getAvatar();
      }),
    );

    this.setState({ avatars: newList });
  }

  async refreshClickedAvatar(avatarId) {
    const newAvatar = await this.getAvatar();
    let newList = this.state.avatars.map((avatar, index) => {
      if (index === avatarId) {
        return newAvatar;
      }
      return avatar;
    });
    this.setState({ avatars: newList });
  }

  render() {
    return (
      <div className="App">
        <div className="cards-container">
          {this.state.avatars.map((avatar, index) => {
            return (
              <div className="card" key={index}>
                <img className="card__avatar" src={avatar} alt=""></img>
                <img
                  className="card__refresh-icon"
                  src={refreshImg}
                  onClick={() => this.refreshClickedAvatar(index)}
                  alt=""
                ></img>
              </div>
            );
          })}
          <button className="bttn-add" onClick={this.addAvatar}>
            +
          </button>
        </div>
        <div className="bttn-container">
          <button className="bttn-container__refresh-all" onClick={this.refreshAllAvatars}>
            REFRESH ALL
          </button>
        </div>
      </div>
    );
  }
}

export default App;
