//import refreshImg from './refresh.svg';
import './App.css';


function App() {

  const fetchApi = async () => {
    let limit = 1;
    const api = await fetch(`https://tinyfac.es/api/data?limit=1&quality=0`);
    const response = await api.json();
    console.log(response);
  }
  fetchApi();
  return (
    <div className="app">
      <div className="container">

        <div className="card">
          <div className="verticalLine"></div>
          <div className="horizontalLine"></div>
        </div>
      </div>



      <div className="btnRefreshAll">
        <button>Refresh All</button>
      </div>
    </div>
  );
}

export default App;
