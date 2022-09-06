import { Component } from 'react';

const URL = 'https://tinyfac.es/api/data?limit=50&quality=0';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((usersList) => {
          this.setState({ users: usersList });
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.state.users);
    if (this.state.users.length === 0) {
      return <div>Loading users, please wait...</div>;
    }

    return (
      <div>
        {this.state.users.slice(0, 10).map((user) => {
          return (
            <div key={user.id}>
              <img src={user.url} width={50} height={50} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
