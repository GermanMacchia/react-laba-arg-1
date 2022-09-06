import { Component } from 'react';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.fetchSingleUser = this.fetchSingleUser.bind(this);
  }

  async fetchSingleUser() {
    try {
      let response = await fetch(URL);
      if (response.status === 200) {
        let data = await response.json();
        this.setState({
          users: [...this.state.users, data[0]],
        });
      } else {
        throw 'Error fetching users list';
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.state);

    return (
      <>
        <main className="container">
          {/* Add users */}
          <div className="empty-user" onClick={this.fetchSingleUser}>
            <div className="plus-sign-hor"></div>
            <div className="plus-sign-ver"></div>
          </div>
          {this.state.users.map((user) => {
            return (
              <div className="image" key={user.id}>
                <img src={user.url} width={240} height={240} />
              </div>
            );
          })}
        </main>
        <footer>
          <button onClick={this.fetchData}>Refresh All</button>
        </footer>
      </>
    );
  }
}

export default App;
