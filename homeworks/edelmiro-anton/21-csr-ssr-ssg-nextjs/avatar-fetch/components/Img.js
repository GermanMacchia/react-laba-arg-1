import styles from './Img.module.css';
// import Image from 'next/image';

export const Img = ({ person, refreshAvatar }) => {
  return (
    <>
      <img
        src="../assets/refresh-button.svg"
        onClick={refreshAvatar}
        alt="refresh-button"
        className={styles.refreshButton}
        width={100}
        height={100}
      />
      <img src={person.url} alt="Avatar_image" className={styles.avatar} />
    </>
  );
};
