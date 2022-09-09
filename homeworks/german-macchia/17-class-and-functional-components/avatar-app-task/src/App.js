import "./App.css";
import React from "react";
import GetButton from "./components/GetButton";
import PhotoList from "./components/PhotoList";

class App extends React.Component {
  constructor() {
    super();
    this.list = React.createRef();
    this.button = React.createRef();
  }
  getPhotos = async (cant) => {
    const api = `https://tinyfac.es/api/data?limit=${cant}&quality=${cant}`;
    const response = await fetch(api);

    if (response.status !== 200) {
      throw new Error("Too many Request, try later");
    } else {
      const json = await response.json();
      return json.map((photo) => {
        return {
          id: photo.first_name + photo.id,
          url: photo.url,
          name: `${photo.first_name} ${photo.last_name}`,
        };
      });
    }
  };

  pushPhoto = async () => {
    const cantPhoto = 1;
    const [photo] = await this.getPhotos(cantPhoto);
    this.list.current.addPhoto(photo);
    this.button.current.setLoading(false);
  };

  refreshAll = async () => {
    const statePhotosLength = await this.list.current.getLength();
    const newPhotos = await this.getPhotos(statePhotosLength);
    this.list.current.refreshList(newPhotos);
  };

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <PhotoList ref={this.list} />
          <GetButton ref={this.button} pushPhoto={this.pushPhoto} />
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
