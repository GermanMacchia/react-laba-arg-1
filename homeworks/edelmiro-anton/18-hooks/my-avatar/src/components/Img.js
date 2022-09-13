import React from 'react';
import '../styles.css';

export const Img = ({ src, onClick }) => {
  return <img src={src} onClick={onClick} alt="" className="avatar" />;
};
