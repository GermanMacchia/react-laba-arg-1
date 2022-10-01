import styles from './RefreshAllBtn.module.css';

export default function RefreshAllBtn({ refreshAll }) {
  return (
    <button onClick={refreshAll} className={styles.btnRefreshAll}>
      Refresh All
    </button>
  );
}
