//import refreshImg from './refresh.svg';
import './App.css';
import React from 'react'
import Card from './components/Card/Card';
import AddCard from './components/AddCard/AddCard';
import RefreshButton from './components/RefreshButton/RefreshButton';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imgs: [],
    }

  }



  refreshCards = async () => {
    //  const api = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    // const response = await api.json();

  }







  render() {
    return (
      <div className="container" >

        <div className="container--card">



          <AddCard />

          <Card />


        </div>
        <RefreshButton onclick={this.state.refreshCards}>REFRESH ALL</RefreshButton>

      </div >
    );
  }

}


export default App;
