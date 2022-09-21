function Footer({ isButtonDisabled, refreshAllUsers }) {
  return (
    <footer className="footer">
      <button disabled={isButtonDisabled} className="refresh-btn" onClick={refreshAllUsers}>
        Refresh All
      </button>
    </footer>
  );
}

export default Footer;
