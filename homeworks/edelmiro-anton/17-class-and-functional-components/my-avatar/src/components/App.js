import React from 'react';
import '../styles.css';
import AddButton from './AddButton';
import Img from './Img';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: [],
    };
  }

  fetchAvatar = async () => {
    const resp = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    const data = await resp.json();
    console.log(data);
    return data[0];
  };

  addAvatar = async () => {
    this.fetchAvatar().then((avatar) => {
      this.setState({
        avatar: [...this.state.avatar, { ...avatar }],
      });
    });
    console.log(...this.state.avatar);
  };

  render() {
    return (
      <>
        <AddButton onClick={this.addAvatar} />
        <div className="container">
          {this.state.avatar.map((people) => (
            <Img src={people.url} />
          ))}
        </div>
      </>
    );
  }
}
