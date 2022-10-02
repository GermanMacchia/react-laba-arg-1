import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';

export default function CalculatorButton({ buttonValue }) {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <Button
      style={{
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '36px',
        color: '#fff',
        borderRadius: 0,
        backgroundColor: '#2E2F3E',
        width: 93,
        height: 93,
      }}
      type="button"
      onClick={() => handleSetDisplayValue(buttonValue)}
    >
      {buttonValue}
    </Button>
  );
}
