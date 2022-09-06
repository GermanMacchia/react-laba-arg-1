import React from 'react';
import styles from './style.module.css';
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: props.url };
  }

  static getDerivedStateFromProps(props, state) {
    return { ...state, url: props.url };
  }

  render() {
    return <img src={this.state.url} className={styles.photo} />;
  }
}

export default Picture;
