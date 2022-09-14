import './App.css';
import React from 'react';
import AddButton from './components/add-button';
import AvatarTile from './components/avatar-tile';
import RefreshAllButton from './components/refresh-button';
import ErrorBoundary from './components/error-boundary';

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
    this.setState(() => {
      return {
        avatarCounter: this.state.avatarCounter + 1,
        avatarImages: [...this.state.avatarImages, newAvatarImage],
        avatarLoading: [...this.state.avatarLoading, false],
      };
    });
  }

  async getNewAvatarImage() {
    return fetch('https://tinyfac.es/api/data?limit=1')
      .then((response) => response.json())
      .then((data) => data[0].url);
  }

  async refreshAvatarImage(avatarId) {
    let onLoadAvatar = this.state.avatarLoading;
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
