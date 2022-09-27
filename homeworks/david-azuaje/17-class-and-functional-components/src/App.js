//import refreshImg from './refresh.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imgs: [],
    }

  }



  refreshCards = async () => {
    const api = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    const response = await api.json();

  }







  render() {
    return (
      <div className="container" >

        <div className="container--card">

          <div className="card" onClick={this.refreshCards} style={{
            backgroundImage: `url(${this.state.imgs})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>

            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
          </div>



          <div className="card" onClick={this.refreshCards} style={{
            backgroundImage: `url(${this.state.imgs})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>

            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
          </div>





          <div className="card" onClick={this.refreshCards} style={{
            backgroundImage: `url(${this.state.imgs})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}>

            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
          </div>






        </div>
        <button className="btnRefreshAll">REFRESH ALL</button>

      </div >
    );
  }

}


export default App;
