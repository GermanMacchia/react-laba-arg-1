import './App.css';
import React from 'react';
import AddButton from './components/AddButton';
import AvatarTile from './components/AvatarTile';
import RefreshAllButton from './components/RefreshButton';
import ErrorBoundary from './components/ErrorBoundary';
import errorImg from './error.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarCounter: 0,
      avatarImages: [],
      avatarLoading: [],
    };
    this.addAvatar = this.addAvatar.bind(this);
    this.getNewAvatarImage = this.getNewAvatarImage.bind(this);
  }

  async addAvatar() {
    const newAvatarImage = await this.getNewAvatarImage();
    this.setState((state, props) => {
      return {
        avatarCounter: state.avatarCounter + 1,
        avatarImages: [...state.avatarImages, newAvatarImage],
        avatarLoading: [...state.avatarLoading, false],
      };
    });
  }

  async getNewAvatarImage() {
    try {
      fetch('https://tinyfac.es/api/data?limit=1')
      .then(response =>{
        if (response.ok) {
          console.log("response ok");
          return response = response.json();
        } else {
          console.log("response not ok");
          throw new Error('image could not be fecthed');
        }
      })
      .then((data) => {
          return data[0].url;
      });
    } catch (error) {
      console.log("error was catched"); 
      // this does not show so it's not catched
      return errorImg;
    }
  }

  async refreshAvatarImage(avatarId) {
    let onLoadAvatar = [...this.state.avatarLoading];
    onLoadAvatar[avatarId] = true;
    this.setState({ avatarLoading: onLoadAvatar });

    let newAvatarURL = await this.getNewAvatarImage();

    let newAvatarImages = this.state.avatarImages.map((avatarImage, index) => {
      if (index === avatarId) {
        return newAvatarURL;
      } else {
        return avatarImage;
      }
    });
    onLoadAvatar[avatarId] = false;
    this.setState({ avatarImages: newAvatarImages, avatarLoading: onLoadAvatar });
  }

  render() {
    return (
      <div className="App">
        <div className="avatar-container">
          {this.state.avatarImages.map((avatarImage, index) => {
            return (
              <AvatarTile
                key={'Avatar #' + index}
                avatarURL={avatarImage}
                isLoading={this.state.avatarLoading[index]}
                onClick={() => this.refreshAvatarImage(index)}
              />
            );
          })}
          <AddButton onClick={this.addAvatar} />
        </div>
        <RefreshAllButton
          onClick={() => {
            this.state.avatarImages.forEach((avatarImage, index) => {
              this.refreshAvatarImage(index);
            });
          }}
        />
      </div>
    );
  }
}

export default App;
