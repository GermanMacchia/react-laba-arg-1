import styles from './AddButton.module.css';

export const AddButton = ({ fetchAvatar }) => {
  return (
    <div className={styles.addButton} onClick={fetchAvatar}>
      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};
