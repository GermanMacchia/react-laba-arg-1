import React from 'react';

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.url };
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {
    return <img src={this.state.url} style={{ width: '100px', height: '100px' }} />;
  }
}

export default Picture;
