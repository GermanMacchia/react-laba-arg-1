import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function DarkButton(props) {
  return (
    <Button
      className="btn"
      variant="contained"
      disableElevation
      style={{
        backgroundColor: '#2E2F3E',
      }}
    >
      {props.children}
    </Button>
  );
}
