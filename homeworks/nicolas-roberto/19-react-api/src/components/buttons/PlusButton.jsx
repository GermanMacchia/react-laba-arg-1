import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';

export default function PlusButton({ buttonValue }) {
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
      <AddIcon
        fontSize="large"
        style={{
          color: '#FFBB00',
        }}
      />
    </Button>
  );
}
