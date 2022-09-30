import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function DeleteButton(props) {
  return (
    <Button
      className="delete-btn"
      variant="contained"
      disableElevation
      style={{
        backgroundColor: '#363746',
        borderRadius: '0px 30px 0px 0px',
      }}
    >
      {props.children}
    </Button>
  );
}
