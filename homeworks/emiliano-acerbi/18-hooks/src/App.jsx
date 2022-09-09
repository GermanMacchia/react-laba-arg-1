import { useState } from 'react';

const URL = 'https://tinyfac.es/api/data?limit=1&quality=0';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchSingleUser() {
    try {
      let response = await fetch(URL);
      if (response.status === 200) {
        let fetchedUsers = await response.json();
        setUsers([...users, fetchedUsers[0]]);
      } else {
        throw 'Error fetching user. Try to slow down on the requests and try again.';
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function refreshUser(index) {
    let response = await fetch(URL);
    let fetchedUsers = await response.json();
    let newUsers = [...users];
    newUsers[index] = fetchedUsers[0];
    setUsers(newUsers);
  }

  async function refreshAllUsers() {
    let usersLength = users.length;
    let response = await fetch(`https://tinyfac.es/api/data?limit=${usersLength}&quality=0`);
    let fetchedUsers = await response.json();
    setUsers(fetchedUsers);
  }

  const isButtonDisabled = users.length === 0 ? true : false;

  return (
    <div className="container">
      <main className="main">
        {/* Iterates over all the users available */}
        {users.map((user, index) => {
          return (
            <div className="image" key={user.id} onClick={() => refreshUser(index)}>
              {/* Overylay */}
              <div className="image__overlay">
                <img src="/refresh-vector1.svg" alt="" />
                <img src="/refresh-vector2.svg" alt="" />
              </div>
              <img src={user.url} width={240} height={240} />
            </div>
          );
        })}

        {/* Add users */}
        <div className="empty-user" onClick={fetchSingleUser}>
          <div className="plus-sign-hor"></div>
          <div className="plus-sign-ver"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <button disabled={isButtonDisabled} className="refresh-btn" onClick={refreshAllUsers}>
          Refresh All
        </button>
      </footer>
    </div>
  );
}

export default App;
