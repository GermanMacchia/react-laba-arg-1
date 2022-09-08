import React from "react";
import reloadIcon from "../assets/refresh-reload.svg";

class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      image: props.image,
      name: props.name,
      id: props.id,
      setNew: props.setNew,
    };
  }

  reload() {
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
      <div
        onClick={() => this.state.setNew(`From ${this.state.name}`)}
        className="container"
      >
        <img
          className="container__reload_image"
          src={reloadIcon}
          alt="reload"
        />
        <img
          className="container__profile_image"
          src={this.state.image}
          alt={this.state.name}
        />
      </div>
    );
  }
}

export default PhotoContainer;
