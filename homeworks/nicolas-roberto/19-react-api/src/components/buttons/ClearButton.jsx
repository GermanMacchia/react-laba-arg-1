import React, { useContext } from 'react';
import { NumberContext } from '../NumberProvider';
import Button from '@material-ui/core/Button';

export default function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <Button
      style={{
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '36px',
        color: '#fff',
        borderRadius: '30px 0px 0px 0px',
        backgroundColor: '#363746',
        width: 93,
        height: 93,
      }}
      type="button"
      onClick={() => handleClearValue()}
    >
      C
    </Button>
  );
}
