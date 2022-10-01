import './App.css';
import React, { useState } from 'react';
import AddCard from './components/AddCard/AddCard';
import Card from './components/Card/Card';
import RefreshButton from './components/RefreshButton/RefreshButton';

function App() {


  return (
    <div className="container">
      <div className="container--card">

        <AddCard />
        <Card />
      </div>
      <RefreshButton />

    </div>
  );
}

export default App;
