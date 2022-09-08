import "./App.css";
import React from "react";
import plusIcon from "./assets/plus_icon.svg";
import PhotoContainer from "./components/PhotoContainer";
import loadingCircles from "./assets/loading_circle.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      photos: [],
    };
  }

  displayPhotos() {
    return this.state.photos.map((photo) => {
      return (
        <PhotoContainer
          url={photo.url}
          name={photo.name}
          key={photo.id.toString()}
          id={photo.id}
          reload={this.reloadPhoto}
        />
      );
    });
  }

  getPhotos = async (cant) => {
    let api = `https://tinyfac.es/api/data?limit=${cant}`;
    const response = await fetch(api);
    const json = await response.json();
    return json.map((photo) => {
      return {
        id: photo.id,
        url: photo.url,
        name: `${photo.first_name} ${photo.last_name}`,
      };
    });
  };

  pushPhoto = async () => {
    const cantPhoto = 1;
    this.setState(() => ({ loading: true }));
    const [photo] = await this.getPhotos(cantPhoto);
    this.setState((state) => ({
      photos: [...state.photos, photo],
    }));
    this.setState(() => ({ loading: false }));
  };

  reloadPhoto = async (id) => {
    const cantPhoto = 1;
    const [photo] = await this.getPhotos(cantPhoto);
    const newStatePhotos = [...this.state.photos];
    const idx = newStatePhotos.findIndex((photo) => photo.id === id);
    newStatePhotos.splice(idx, 1, {
      id: photo.id,
      url: photo.url,
      name: `${photo.first_name} ${photo.last_name}`,
    });
    this.setState(() => ({ photos: newStatePhotos }));
  };

  refreshAll = async () => {
    const statePhotosLength = this.state.photos.length;
    const newPhotos = await this.getPhotos(statePhotosLength);
    this.setState(() => ({ photos: newPhotos }));
  };

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          {this.displayPhotos()}
          <button className="square_button" onClick={this.pushPhoto}>
            {this.state.loading ? (
              <img
                className="square_button__loading"
                src={loadingCircles}
                alt="loading Circle"
              />
            ) : (
              <img
                className="square_button__icon"
                src={plusIcon}
                alt="plus_icon"
              />
            )}
          </button>
        </div>
        <footer>
          <button className="footer__button" onClick={this.refreshAll}>
            Refresh All
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
