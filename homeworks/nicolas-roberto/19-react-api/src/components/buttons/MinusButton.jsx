import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@mui/icons-material/Remove';

export default function MinusButton({ buttonValue }) {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <Button
      style={{
        borderRadius: 0,
        backgroundColor: '#363746',
        width: 93,
        height: 93,
      }}
      type="button"
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      <RemoveIcon
        fontSize="large"
        style={{
          color: '#FFBB00',
        }}
      />
    </Button>
  );
}
