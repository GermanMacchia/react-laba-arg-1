import React from 'react';
import refreshImg from './assets/images/refresh.svg';
import './App.css';

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
  }

  addAvatar() {
    fetch(URL).then((res) => {
      res.json().then((data) => {
        this.setState((state) => {
          const newList = [...state.avatars, data[0].url];
          return { avatars: newList };
        });
      });
    });
  }

  refreshAllAvatars() {
    this.setState({
      avatars: [],
    });
  }

  refreshClickedAvatar(avatarId) {
    fetch(URL).then((res) => {
      res.json().then((data) => {
        const newAvatar = data[0].url;
        let newList = this.state.avatars.map((avatar, index) => {
          if (index === avatarId) {
            return newAvatar;
          }
          return avatar;
        });
        this.setState({ avatars: newList });
      });
    });
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
                  className="card__refreshIcon"
                  src={refreshImg}
                  onClick={() => this.refreshClickedAvatar(index)}
                  alt=""
                ></img>
              </div>
            );
          })}
          <button className="addButton" onClick={this.addAvatar}>
            +
          </button>
        </div>
        <div className="refreshButton-container">
          <button className="refreshButton" onClick={this.refreshAllAvatars}>
            REFRESH ALL
          </button>
        </div>
      </div>
    );
  }
}

export default App;
