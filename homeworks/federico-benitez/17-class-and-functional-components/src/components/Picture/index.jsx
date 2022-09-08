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
    return (
      <div className={styles.card}>
        {this.state.isLoading && (
          <div className={styles.overlay}>
            <img src="/001-refresh.svg" alt="reloading" className={styles.loading} />
          </div>
        )}
        <img src={this.state.url} className={styles.photo} alt="photo" />
      </div>
    );
  }
}

export default Picture;
