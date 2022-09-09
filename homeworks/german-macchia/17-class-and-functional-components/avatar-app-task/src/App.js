import "./App.css";
import React, { Component, createRef } from "react";
import GetButton from "./components/GetButton";
import PhotoList from "./components/PhotoList";

class App extends Component {
  constructor() {
    super();
    this.list = createRef();
    this.button = createRef();
  }
  //when GetButton pushed, will trigger to List Children component addPhoto Function
  //Then will trigger setLoading from GetButton
  pushPhoto = async () => {
    await this.list.current.addPhoto();
    this.button.current.setLoading(false);
  };
  //Will trigger RefreshList from List Children Component
  refreshAll = () => {
    this.list.current.refreshList();
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
