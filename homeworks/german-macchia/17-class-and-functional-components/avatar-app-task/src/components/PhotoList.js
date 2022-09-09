import PhotoContainer from "./PhotoContainer";
import React, { Component } from "react";
import fetchPhotos from "../api";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      refreshList: this.refreshList,
    };
  }

  getPhotos = async (cant) => {
    const response = await fetchPhotos(cant);
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

  refreshList = async () => {
    const statePhotosLength = this.state.photos.length;
    const newPhotos = await this.getPhotos(statePhotosLength);
    this.setState({ photos: newPhotos });
  }

  addPhoto = async () => {
    const cant = 1
    const photo = await this.getPhotos(cant)
    this.setState((state) => ({ photos: [...state.photos, ...photo] }));
  }

  displayPhotos = () =>
    this.state.photos.map((photo) => {
      return (
        <PhotoContainer
          url={photo.url}
          name={photo.name}
          key={photo.name + photo.id}
          id={photo.id}
          reload={this.reloadPhoto}
        />
      );
    });

  render() {
    return <>{this.displayPhotos()}</>;
  }
}

export default PhotoList;
