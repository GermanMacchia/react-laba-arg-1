import styles from "./RefreshAllBtn.module.css"

export const RefreshAllBtn = ({ onClick }) => {
    return (
      <button onClick={onClick} className={styles.btnRefreshAll}>
        Refresh All
      </button>
    );
  };