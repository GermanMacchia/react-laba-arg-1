import './App.css';
import React from 'react';
import AddButton from './components/AddButton';
import AvatarTile from './components/AvatarTile';
import RefreshAllButton from './components/RefreshButton';
import ErrorBoundary from './components/ErrorBoundary';

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
    return fetch('https://tinyfac.es/api/data?limit=1')
      .then((response) => response.json())
      .then((data) => data[0].url);
  }

  async refreshAvatarImage(avatarId) {
    let onLoadAvatar = [...this.state.avatarLoading];
    onLoadAvatar[avatarId] = true;
    console.log( onLoadAvatar == this.state.avatarLoading);
    this.setState({ avatarLoading: onLoadAvatar });

    let newAvatarURL = await this.getNewAvatarImage();

    let newAvatarImages = this.state.avatarImages.map((avatarImage, index) => {
      if (index === avatarId) {
        return newAvatarURL;
      } else {
        return avatarImage;
      }
    });
    this.setState({ avatarImages: newAvatarImages });
    onLoadAvatar[avatarId] = false;
  }

  render() {
    return (
      <div className="App">
        <div className="avatar-container">
          {this.state.avatarImages.map((avatarImage, index) => {
            return (
              <ErrorBoundary key={'Error bound #' + index} onClick={() => this.refreshAvatarImage(index)}>
                <AvatarTile
                  key={'Avatar #' + index}
                  avatarURL={avatarImage}
                  isLoading={this.state.avatarLoading[index]}
                  onClick={() => this.refreshAvatarImage(index)}
                />
              </ErrorBoundary>
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
