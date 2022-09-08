import React from 'react';
import styles from './style.module.css';
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: props.index, url: props.url, isLoading: false };
  }

  static getDerivedStateFromProps(props, state) {
    const isLoading = props.refetchingImages.some((imgIndex) => imgIndex === state.index);
    return { ...state, url: props.url, isLoading };
  }

  render() {
    return <img src={this.state.url} className={`${styles.photo} ${this.state.isLoading ? styles.loading : ''}`} />;
  }
}

export default Picture;
