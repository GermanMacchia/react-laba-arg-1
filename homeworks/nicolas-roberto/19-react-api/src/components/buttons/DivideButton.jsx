import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import DivideIcon from '../../assets/divide.svg';

export default function DivideButton({ buttonValue }) {
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
      <img src={DivideIcon} alt="Divide" />
    </Button>
  );
}
