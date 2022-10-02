import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import '../styles.css';
import Button from '@material-ui/core/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';

export default function EqualButton() {
  const { doMath } = useContext(NumberContext);
  return (
    <Button
      style={{
        borderRadius: 0,
        backgroundColor: '#FFBB00',
        width: 93,
        height: 187,
      }}
      variant="contained"
      disableElevation
      className="equal-button"
      type="button"
      onClick={() => doMath()}
    >
      <DragHandleIcon
        fontSize="large"
        style={{
          color: '#FFF',
        }}
      />
    </Button>
  );
}
