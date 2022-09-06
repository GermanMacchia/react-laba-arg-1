import React, { Component } from 'react';
import Picture from '../Picture';

export default class PictureGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { images: props.data };
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state, images: props.data };
  }

  render() {
    return (
      <ul>
        {this.state.images.map((img, i) => (
          <li onClick={() => this.props.handleRefresh(i)}>
            <Picture key={img} url={img} onRefresh />
          </li>
        ))}
      </ul>
    );
  }
}
