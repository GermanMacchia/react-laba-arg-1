import React from "react";

class PhotoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.name,
      id: props.id,
    };
  }

  reload = async () => {
    const api = "https://tinyfac.es/api/data?limit=1&quality=0";
    const response = await fetch(api);
    const [photo] = await response.json();

    this.setState(() => ({
      id: photo.id,
      url: photo.url,
      name: `${photo.first_name} ${photo.last_name}`,
    }));
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
