import React from 'react';
import './RefreshButton.css';

function RefreshAllButton({ onClick }) {
  return (
    <div className="refresh-all-button" onClick={onClick}>
      REFRESH ALL
    </div>
  );
}

export default RefreshAllButton;
