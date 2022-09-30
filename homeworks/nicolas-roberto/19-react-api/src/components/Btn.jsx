import React from 'react';
import './Button.css';
import Button from '@material-ui/core/Button';

export default function Btn() {
  return (
    <div className="btn">
      <Button variant="contained" disableElevation>
        2
      </Button>
    </div>
  );
}
