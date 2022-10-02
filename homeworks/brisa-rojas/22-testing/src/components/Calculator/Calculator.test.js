import Calculator from './Calculator';
import { render, cleanup } from '@testing-library/react';

describe('Calculator renders correctly itself and its children components', () => {
  afterEach(() => {
    cleanup();
  });
  test(`Calculator renders ok`, () => {
    render(<Calculator />);
    const calcElement = document.querySelector('.calculator');
    expect(calcElement).toBeInTheDocument();
  });
  test(`Keyboard renders ok`, () => {
    render(<Calculator />);
    const keyboardElement = document.querySelector('.keyboard');
    expect(keyboardElement).toBeInTheDocument();
  });
    test(`Display renders ok`, () => {
    render(<Calculator />);
    const displayElement = document.querySelector('.display');
    expect(displayElement).toBeInTheDocument();
  });
});

