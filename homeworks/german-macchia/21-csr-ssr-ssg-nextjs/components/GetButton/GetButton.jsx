import loadingCircle from "../../assets/loading_circle.svg";
import plusIcon from "../../assets/plus_icon.svg";
import React from "react";
import styles from './GetButton.module.css'
import Image from 'next/image'

export const GetButton = React.memo(({ handleNewPhoto, loading }) => {

  return (
    <button className={styles.square_button} onClick={handleNewPhoto}>
      {loading ? (
        <Image
          className={styles['square_button__loading']}
          src={loadingCircle}
          alt="loading Circle"
        />
      ) : (
        <Image className={styles.square_button__icon} src={plusIcon} alt="plus_icon" />
      )}
    </button>
  );
});
