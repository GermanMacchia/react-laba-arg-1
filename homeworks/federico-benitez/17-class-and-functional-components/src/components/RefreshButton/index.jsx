import React, { Component } from 'react';
import styles from './style.module.css';
export default class RefreshButton extends Component {
  render() {
    return (
      <footer>
        <button className={styles.button} onClick={this.props.onClick}>
          Refresh All
        </button>
      </footer>
    );
  }
}
