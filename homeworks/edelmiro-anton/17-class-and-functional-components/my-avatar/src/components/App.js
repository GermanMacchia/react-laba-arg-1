import React from 'react';
import '../styles.css';
import AddButton from './AddButton';
import Img from './Img';
import RefreshAllBtn from './RefreshAllBtn';

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
    // console.log(data);
    return data[0];
  };

  addAvatar = async () => {
    this.fetchAvatar().then((avatar) => {
      this.setState({
        avatar: [...this.state.avatar, { ...avatar }],
      });
    });
    // console.log(...this.state.avatar);
  };

  refreshAvatar = (index) => {
    this.fetchAvatar().then((person) => {
      const refresh = [...this.state.avatar];

      refresh.splice(index, 1, person);
      this.setState({
        avatar: refresh,
      });
    });
    // console.log(...this.state.avatar);
  };

  refreshAll = async () => {
    const refreshAll = [...this.state.avatar];
    const refreshAvatar = await Promise.all(refreshAll.map(() => this.fetchAvatar()));
    this.setState({
      avatar: refreshAvatar,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div style={{ display: '-webkit-box' }}>
            {this.state.avatar.map((people, index) => (
              <Img src={people.url} onClick={() => this.refreshAvatar(index)} />
            ))}
            <AddButton onClick={this.addAvatar} />
          </div>
          <div className="refreshContainer">
            {this.state.avatar.length ? <RefreshAllBtn onClick={this.refreshAll} /> : null}
          </div>
        </div>
      </>
    );
  }
}
