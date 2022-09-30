import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function EqualsButton(props) {
  return (
    <Button
      className="equals-button"
      variant="contained"
      disableElevation
      style={{
        backgroundColor: '#FFBB00',
        borderRadius: '0px',
      }}
    >
      {props.children}
    </Button>
  );
}
