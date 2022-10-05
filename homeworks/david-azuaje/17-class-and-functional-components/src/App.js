import "./App.css";
import React from "react";
import Card from "./components/Card/Card";
import AddCard from "./components/AddCard/AddCard";
import RefreshButton from "./components/RefreshButton/RefreshButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isLoading: false,
    };
  }

  getImage = async () => {
    const response = await fetch("https://tinyfac.es/api/users");
    const result = await response.json();
    return result[0];
  };

  addImage = async () => {
    this.getImage().then((image) => {
      this.setState((prevImage) => ({
        images: [...prevImage.images, { ...image, isLoading: false }],
      }));
    });
  };

  refreshImages = async (index) => {
    this.getImage().then((image) => {
      const refresh = [...this.state.images];
      refresh.splice(index, 1, image);
      this.setState({
        images: refresh,
      });
    });
  };

  refreshAllImages = async () => {
    this.setState({
      isLoading: true,
    });
    const refreshAll = [...this.state.images];
    const refreshAvatars = await Promise.all(
      refreshAll.map((image) => this.getImage())
    );
    this.setState({
      images: refreshAvatars,
      isLoading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container--card">
          {this.state.images.map((person, index) => (
            <Card
              key={index}
              onClick={() => this.refreshImages(index)}
              src={person.url}
              loader={
                this.state.isLoading ? this.state.isLoading.toString() : null
              }
            />
          ))}

          <AddCard onClick={this.addImage} />
        </div>

        {this.state.images.length ? (
          <RefreshButton onClick={this.refreshAllImages}>
            REFRESH ALL
          </RefreshButton>
        ) : null}
      </div>
    );
  }
}

export default App;