import React, { PureComponent } from "react";
import fetchPhotos from "../api";

class PhotoContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.name,
      id: props.id,
    };
  }

  reload = async () => {
    const cant = 1;
    const response = await fetchPhotos(cant);
    if (response.status !== 200) {
      throw new Error("Too many Request, try later");
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
