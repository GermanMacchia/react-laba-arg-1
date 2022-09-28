import styles from "./img.module.css"
import refresh from '../public/assets/refresh-button.svg';
export const Img = ({ src, onClick }) => {
    return (
      <>
        <img src={refresh} onClick={onClick} alt="refresh-button" className={styles.refreshButton} />
        <img src={src} alt="" className={styles.avatar} />
      </>
    );
  };