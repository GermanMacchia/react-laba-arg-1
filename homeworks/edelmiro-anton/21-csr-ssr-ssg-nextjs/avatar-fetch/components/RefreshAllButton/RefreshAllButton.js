import styles from './RefreshAllButton.module.css';

export default function RefreshAllButton({ refreshAll }) {
  return (
    <button onClick={refreshAll} className={styles.btnRefreshAll}>
      Refresh All
    </button>
  );
}
