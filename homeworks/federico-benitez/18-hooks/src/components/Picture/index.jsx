import React from 'react';
import styles from './style.module.css';


function Picture({ url, isLoading }) {
  return (
    <div className={styles.card}>
      {isLoading && (
        <div className={styles.overlay}>
          <img src="/001-refresh.svg" alt="reloading" className={styles.loading} />
        </div>
      )}
      <img src={url} className={styles.photo} alt="photo" />
    </div>
  );
}

export default Picture;
