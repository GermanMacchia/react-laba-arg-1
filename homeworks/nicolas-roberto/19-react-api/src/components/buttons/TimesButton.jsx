import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TimesButton({ buttonValue }) {
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
      <CloseIcon
        fontSize="large"
        style={{
          color: '#FFBB00',
        }}
      />
    </Button>
  );
}
