import React, { Component } from 'react';

export default class AddNewPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Add new picture Component</button>
      </div>
    );
  }
}
