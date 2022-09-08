import React from "react";

class PhotoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.name,
      id: props.id,
      reload: props.reload,
    };
  }

  render() {
    return (
      <div
        className="container"
        onClick={() => this.state.reload(this.state.id)}
      >
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
