import React from 'react';

import { AddNewPhoto, PictureGrid, RefreshButton } from './components';

class App extends React.Component {
  render() {
    return (
      <>
        <PictureGrid />
        <AddNewPhoto />
        <RefreshButton />
      </>
    );
  }
}

export default App;
