import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export default function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleClearValue()}>
      C
    </button>
  );
}
