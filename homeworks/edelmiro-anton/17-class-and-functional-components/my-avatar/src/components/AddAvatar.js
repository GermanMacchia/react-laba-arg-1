import React from 'react';
import addButton from '../assets/add-button.png';
import '../styles.css';

export default class AddAvatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
    };
  }

  fetching = () => {
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
    console.log(this.state.avatar);
    const createImg = document.createElement('img');
    createImg.src = this.state.avatar;
    this.fetching();
    createImg.setAttribute('class', 'avatar');
    document.querySelector('#container').appendChild(createImg);
  };

  render() {
    return (
      <>
        <img onClick={this.addAvatar} src={addButton} className="addButton" alt="" />
        <div id="container"></div>
      </>
    );
  }
}
