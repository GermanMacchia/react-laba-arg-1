import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.fetchOneUser = this.fetchOneUser.bind(this);
  }

  fetchOneUser = async () => {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let posts = await response.json();
    this.setState({
      posts: [...this.state.posts, posts[0]],
    });
  };

  refreshOneUser = async (id) => {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let posts = await response.json();
    let reFetch = { posts: [...this.state.posts] };
    reFetch.posts[id] = posts[0];
    this.setState(reFetch);
  };

  refreshEveryUser = async () => {
    this.state.posts.forEach((user, id) => {
      this.refreshOneUser(id);
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.posts.map((posts, id) => {
            return (
              <li
                onClick={() => this.refreshOneUser(id)}
                key={posts.id}
                style={{
                  backgroundImage: `url(${posts.url})`,
                }}
              >
                <div className="imageRefresh"></div>
              </li>
            );
          })}
          <button onClick={this.fetchOneUser} className="add-btn">
            <img className="line1" alt="" />
            <img className="line2" alt="" />
          </button>
        </ul>
        <button className="refresh-btn" onClick={this.refreshEveryUser}>
          REFRESH ALL
        </button>
      </div>
    );
  }
}
