import Keyboard from './Keyboard';
import { render, cleanup } from '@testing-library/react';

describe('Keyboard renders correctly itself and its children components', () => {
  afterEach(() => {
    cleanup();
  });
  test(`Keyboard renders ok`, () => {
    render(<Keyboard />);
    const keyboardElement = document.querySelector('.keyboard');
    expect(keyboardElement).toBeInTheDocument();
  });
  test(`Keyboard renders 19 buttons within itself`, () => {
    render(<Keyboard />);
    const keyboardElement = document.querySelector('.keyboard');
    let childrenButtons = keyboardElement.children;
    expect(childrenButtons.length).toBe(19);
  });
});
