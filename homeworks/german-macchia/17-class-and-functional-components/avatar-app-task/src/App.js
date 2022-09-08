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

  reload = (string) => {
    console.log(string);
  };

  displayPhotos() {
    return this.state.photos.map((photo) => {
      return (
        <PhotoContainer
          image={photo.url}
          name={photo.name}
          key={`Container for ${photo.name}`}
          id={photo.id}
          setNew={this.reload}
        />
      );
    });
  }

  getPhoto = () => {
    this.setState(() => ({ loading: true }));
    fetch("https://tinyfac.es/api/data?limit=1&quality=1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          photos: [
            ...this.state.photos,
            {
              id: json[0].id,
              url: json[0].url,
              name: `${json[0].first_name} ${json[0].last_name}`,
            },
          ],
        });
        this.setState(() => ({ loading: false }));
      });
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          {this.displayPhotos()}
          <button className="square_button" onClick={this.getPhoto}>
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
          <button className="footer__button">Refresh All</button>
        </footer>
      </div>
    );
  }
}

export default App;
