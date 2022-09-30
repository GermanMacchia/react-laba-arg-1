import React from 'react';
import './KeypadColumn.css';

export default function KeypadColumn(props) {
  return <div className="keypad-column">{props.children}</div>;
}
