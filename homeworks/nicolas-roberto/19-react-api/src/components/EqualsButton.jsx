import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function EqualsButton(props) {
  return (
    <Button sx={{ borderRadius: 0 }} className="equals-button" variant="contained" disableElevation>
      {props.children}
    </Button>
  );
}
