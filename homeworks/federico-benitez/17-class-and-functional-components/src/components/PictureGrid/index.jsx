import React, { Component } from 'react';
import { AddNewPhoto, Picture } from '../../components';

import styles from './style.module.css';

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
      <ul className={styles.gridPhotos}>
        {this.state.images.map((img, i) => (
          <li key={i} onClick={() => this.props.handleRefresh(i)}>
            <Picture url={img} />
          </li>
        ))}
        <AddNewPhoto onClick={this.props.handleAdd} />
      </ul>
    );
  }
}
