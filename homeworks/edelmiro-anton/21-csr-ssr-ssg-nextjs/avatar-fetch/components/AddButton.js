import styles from './AddButton.module.css';

export const AddButton = ({ onClick }) => {
  return (
    <div className={styles.addButton} onClick={onClick}>
      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  );
};
