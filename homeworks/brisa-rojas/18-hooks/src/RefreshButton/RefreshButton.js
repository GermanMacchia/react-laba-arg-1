import React from 'react';

function RefreshAllButton({ onClick }) {
  return (
    <div className="refresh-all-button" onClick={onClick}>
      REFRESH ALL
    </div>
  );
}

export default RefreshAllButton;
