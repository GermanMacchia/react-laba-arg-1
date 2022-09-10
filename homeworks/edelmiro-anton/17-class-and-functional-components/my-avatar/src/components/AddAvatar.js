import React from 'react';
import addButton from '../assets/add-button.png';
import '../styles.css';
import RefreshButton from './RefreshButton';

export default class AddAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      limit: 1,
      show: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = `https://tinyfac.es/api/data?limit=1&quality=0`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          avatar: data[0].url,
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  addAvatar = () => {
    this.fetchData();
    console.log(this.state.avatar);
    const createImg = document.createElement('img');
    createImg.src = this.state.avatar;
    createImg.setAttribute('class', 'avatar');
    document.querySelector('.avatarContainer').appendChild(createImg);
  };

  render() {
    return (
      <>
        <img onClick={this.addAvatar} src={addButton} className="addButton" alt="" />
        <div className="container">
          <div className="avatarContainer"></div>
          <RefreshButton show={this.state.show} />
        </div>
      </>
    );
  }
}
