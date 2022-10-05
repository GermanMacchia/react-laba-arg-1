import styles from './AddButton.module.css';

export default function AddButton({ addAvatar }) {
  return (
    <div className={styles.addButton} onClick={addAvatar}>
      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
}
