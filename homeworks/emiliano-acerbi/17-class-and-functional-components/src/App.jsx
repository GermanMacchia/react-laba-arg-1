import React, { Component } from 'react';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.fetchSingleUser = this.fetchSingleUser.bind(this);
    this.refreshUser = this.refreshUser.bind(this);
    this.refreshAllUsers = this.refreshAllUsers.bind(this);
  }

  async fetchSingleUser() {
    try {
      let response = await fetch(URL);
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        this.setState({
          users: [...this.state.users, fetchedUsers[0]],
        });
      } else {
        throw 'Error fetching users list';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async refreshUser(index) {
    let response = await fetch(URL);
    let fetchedUsers = await response.json();
    let newUsers = { users: [...this.state.users] };
    newUsers.users[index] = fetchedUsers[0];
    this.setState(newUsers);
  }

  async refreshAllUsers() {
    let usersLength = this.state.users.length;
    let response = await fetch(`https://tinyfac.es/api/data?limit=${usersLength}&quality=0`);
    let fetchedUsers = await response.json();
    this.setState({
      users: fetchedUsers,
    });
  }

  render() {
    // If there are no users, the refresh all button will be disabled
    const isButtonDisabled = this.state.users.length === 0 ? true : false;

    return (
      <div className="container">
        <main className="main">
          {/* Add users */}
          <div className="empty-user" onClick={this.fetchSingleUser}>
            <div className="plus-sign-hor"></div>
            <div className="plus-sign-ver"></div>
          </div>

          {/* Iterates over all the users available */}
          {this.state.users.map((user, index) => {
            return (
              <div className="image" key={user.id} onClick={() => this.refreshUser(index)}>
                <img src={user.url} width={240} height={240} />
              </div>
            );
          })}
        </main>

        {/* Footer */}
        <footer className="footer">
          <button disabled={isButtonDisabled} className="refresh-btn" onClick={this.refreshAllUsers}>
            Refresh All
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
