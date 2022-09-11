import './App.css';
import React from 'react';
import refreshIcon from './refresh-icon.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarCounter: 0,
      avatarImages : []
    }; 
    this.addAvatar = this.addAvatar.bind(this);
    this.getNewAvatarImage = this.getNewAvatarImage.bind(this); 
  }

  async addAvatar() {
    const newAvatarImage =  await this.getNewAvatarImage();
    this.setState(() => { 
      return ({
        avatarCounter: this.state.avatarCounter + 1,
        avatarImages: [...this.state.avatarImages, newAvatarImage]
      })
    });
  }

  async getNewAvatarImage() {
    return fetch('https://tinyfac.es/api/data?limit=1')
      .then(response => response.json())
      .then(data => data[0].url);
  }

  async refreshAvatarImage(avatarId) {
    let newAvatarURL = await this.getNewAvatarImage();
    let newAvatarImages = this.state.avatarImages.map(
      (avatarImage, index) => {
        if (index === avatarId) {
          return newAvatarURL;
        } else {
          return avatarImage;
        }
      }
    );
    this.setState({avatarImages: newAvatarImages});
  }

  render() {
    return (
      <div className="App">
        <div className="avatar-container">
          {this.state.avatarImages.map((avatarImage, index) => {
            return <AvatarTile  key= {"Avatar #" + index} avatarURL = {avatarImage} onClick={() => this.refreshAvatarImage(index)}/>
          })} 
          <AddButton onClick= {this.addAvatar}/>
        </div>
        <RefreshAllButton onClick={() => {
          this.state.avatarImages.forEach((avatarImage, index) => {
            this.refreshAvatarImage(index);
          });
        }}/>
      </div>
    );
  }
}


class AvatarTile extends React.Component {
  render() {
    return (
      <div className="avatar-tile tile" onClick={this.props.onClick} >
        <img className="avatar-tile__img" src={this.props.avatarURL} alt="avatar img" />
        <div className="avatar-tile__overlay">
          <img className="avatar-tile__refresh-icon" src={refreshIcon} alt="refresh img" />
        </div>
      </div>
    );
  }
}

class AddButton extends React.Component {
  render() {
    return (
      <div className="add-avatar-tile tile" onClick={this.props.onClick}>
        +
      </div>
    )
  }
}

class RefreshAllButton extends React.Component {
  render() {
    return (
      <div className="refresh-all-button" onClick={this.props.onClick}>
        REFRESH ALL
      </div>
    )
  }
}

export default App;
