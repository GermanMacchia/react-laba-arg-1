import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

export default function EqualButton() {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => doMath()}>
      =
    </button>
  );
}
