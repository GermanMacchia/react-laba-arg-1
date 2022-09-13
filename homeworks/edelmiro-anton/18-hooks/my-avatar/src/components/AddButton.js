import React from 'react';
import addButton from '../assets/add-button.png';
import '../styles.css';

export const AddButton = ({ onClick }) => {
  return <img className="addButton" onClick={onClick} src={addButton} />;
};
