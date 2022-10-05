import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

export default function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}
