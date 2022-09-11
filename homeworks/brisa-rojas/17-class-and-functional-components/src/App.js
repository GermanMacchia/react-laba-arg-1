import './App.css';
import React from 'react';


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
    this.setState({
      avatarCounter: this.state.avatarCounter + 1,
      avatarImages: [...this.state.avatarImages, newAvatarImage]
    });
  }

   async getNewAvatarImage(N) {
    let avatarImageURL;
    return  fetch('https://tinyfac.es/api/data?limit=1')
      .then(response => response.json())
      .then(data => data[0].url);
  }

  refreshAvatarImage(avatarId) {
    let newAvatarURL = this.getNewAvatarImage();
    let newAvatarImages = this.state.avatarImages.map(
      (avatarImage, index) => {
        if (index === avatarId) {
          return newAvatarURL;
        } else {
          return avatarImage;
        }
      }
    );
    this.setState({
        avatarImages: newAvatarImages
      }
    )
  }

  render() {
    return (
      <div className="App">
         {this.state.avatarImages.map((avatarImage, index) => {
          return <AvatarTile  key= {"Avatar #" + index} avatarURL = {avatarImage} onClick={() => this.refreshAvatarImage(index)}/>
        })} 
        <AddButton onClick= {this.addAvatar}/> 
      </div>
    );
  }
}


class AvatarTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar-tile tile" onClick={this.props.onClick} >
        <img className="avatar-tile__img" src={this.props.avatarURL} />
      </div>
    );
  }
}

class AddButton extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div className="add-avatar-tile tile" onClick={this.props.onClick}>
        +
      </div>
    )
  }
}

export default App;
