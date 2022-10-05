import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import PercentIcon from '@mui/icons-material/Percent';

export default function PercentButton({ buttonValue }) {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <Button
      style={{
        borderRadius: 0,
        backgroundColor: '#2E2F3E',
        width: 93,
        height: 93,
      }}
      type="button"
      onClick={() => handleSetCalcFunction(buttonValue)}
    >
      <PercentIcon
        fontSize="medium"
        style={{
          color: '#FFf',
        }}
      />
    </Button>
  );
}
