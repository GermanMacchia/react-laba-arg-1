import React, { PureComponent } from "react";
import fetchPhotos from "../fetchPhotos";

class PhotoContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.name,
      id: props.id,
      error: false,
    };
  }

  // reload new data for this single container
  reload = async () => {
    const cant = 1;
    const response = await fetchPhotos(cant);
    if (response.status !== 200) {
      this.setState(() => ({
        error: true,
        errorMessage: `STATUS ${response.status}, ${response.statusText}`,
      }));
    } else {
      const [photo] = await response.json();
      this.setState(() => ({
        id: photo.id,
        url: photo.url,
        name: `${photo.first_name} ${photo.last_name}`,
      }));
    }
  };

  render() {
    if (this.state.error) {
      throw new Error(this.state.errorMessage);
    }
    return (
      <div className="container" onClick={() => this.reload()}>
        <img
          className="container__profile_image"
          src={this.state.url}
          alt={this.state.name}
        />
        <div className="container__image_box" />
      </div>
    );
  }
}

export default PhotoContainer;
