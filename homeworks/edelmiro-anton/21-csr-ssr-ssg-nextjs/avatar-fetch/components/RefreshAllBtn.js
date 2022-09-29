import styles from './RefreshAllBtn.module.css';

export const RefreshAllBtn = ({ refreshAll }) => {
  return (
    <button onClick={refreshAll} className={styles.btnRefreshAll}>
      Refresh All
    </button>
  );
};
