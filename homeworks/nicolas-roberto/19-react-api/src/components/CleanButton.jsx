import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function CleanButton(props) {
  return (
    <Button
      className="clean-btn"
      variant="contained"
      disableElevation
      style={{
        backgroundColor: '#363746',
        borderRadius: '30px 0px 0px 0px',
      }}
    >
      {props.children}
    </Button>
  );
}
