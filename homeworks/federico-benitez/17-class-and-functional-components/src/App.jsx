import React from 'react';

import { AddNewPhoto, PictureGrid, RefreshButton } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    this.addNewPicture = this.addNewPicture.bind(this);
    this.refreshOne = this.refreshOne.bind(this);
    this.refreshAll = this.refreshAll.bind(this);
  }

  addNewPicture() {
    this.setState({ images: [...this.state.images, 'new picture'] });
  }

  refreshOne(selected) {
    const newImages = this.state.images.map((url, i) => (selected === i ? 'replaced' : url));
    this.setState({ images: newImages });
  }

  refreshAll() {
    const newImages = this.state.images.map(() => 'other images');
    this.setState({ images: newImages });
  }

  render() {
    return (
      <>
        <p>{JSON.stringify(this.state.images)}</p>
        <PictureGrid />
        <AddNewPhoto onClick={this.addNewPicture} />
        <RefreshButton onClick={this.refreshAll} />
      </>
    );
  }
}

export default App;
