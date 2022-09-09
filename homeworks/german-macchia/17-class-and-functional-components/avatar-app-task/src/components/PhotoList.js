import PhotoContainer from "./PhotoContainer";
import React from "react";

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      refreshList: this.refreshList,
    };
  }

  refreshList = (photos) => this.setState({ photos: photos });
  getLength = () => this.state.photos.length;
  addPhoto = (photo) =>
    this.setState((state) => ({ photos: [...state.photos, photo] }));
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
