import React from 'react';
import '../styles.css';
import addButton from "../assets/add-button.png"

export default class AvatarApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      avatar: null,
      limit: 1,
    };
  }

  counter = () => {
    this.setState((prevState) => {
      return {
        limit: prevState.limit + 1,
      };
    });
    console.log(this.state.limit);
  };

  componentDidMount() {
    const url = `https://tinyfac.es/api/data?limit=${this.state.limit}&quality=0`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          id: data[0].id,
          avatar: data[0].url,
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
    }

  render() {
    return (
      <>
        <ul>
          <li key={this.state.id}>
            <img src={this.state.avatar} alt="avatar" className="avatar" />
          </li>
        </ul>
        <img onClick={this.counter} src={addButton} className="addButton" alt="" />
      </>
    );
  }
}
