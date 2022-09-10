import PhotoContainer from "./PhotoContainer";
import React, { Component } from "react";
import fetchPhotos from "../fetchPhotos";

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      refreshList: this.refreshList,
    };
  }

  //fetch from api, receives quantity, returns array
  getPhotos = async (quantity) => {
    const response = await fetchPhotos(quantity);
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

  //Set length from array, call getPhoto with same quantity
  refreshList = async () => {
    const statePhotosLength = this.state.photos.length;
    const newPhotos = await this.getPhotos(statePhotosLength);
    this.setState({ photos: newPhotos });
  };

  //Push single photo to array
  addPhoto = async () => {
    const quantity = 1;
    const photo = await this.getPhotos(quantity);
    this.setState((state) => ({ photos: [...state.photos, ...photo] }));
  };

  //Returns array of one Photocontainer from object in array
  displayPhotos = () =>
    this.state.photos.map((photo) => {
      return (
        <PhotoContainer
          url={photo.url}
          name={photo.name}
          key={photo.name + photo.id}
          id={photo.id}
        />
      );
    });

  render() {
    return <>{this.displayPhotos()}</>;
  }
}

export default PhotoList;
