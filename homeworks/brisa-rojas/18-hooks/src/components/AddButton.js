import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <div className="add-avatar-tile tile" onClick={onClick}>
      +
    </div>
  );
};

export default AddButton;
