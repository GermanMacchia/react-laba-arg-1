import React, { Component } from 'react';

export default class RefreshButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>RefreshButton</button>
      </div>
    );
  }
}
