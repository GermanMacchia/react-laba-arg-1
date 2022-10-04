import styles from './Img.module.css';

export default function Img({ person, refreshAvatar }) {
  return (
    <>
      <img
        src="/assets/refresh-button.svg"
        onClick={refreshAvatar}
        alt="refresh-button"
        className={styles.refreshButton}
      />
      <img src={person.url} alt="Avatar_image" className={styles.avatar} />
    </>
  );
}
