import Calculator from './Calculator';
import { render, cleanup, fireEvent } from '@testing-library/react';

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

describe('Calculator renders correctly the result', () => {
  test('2 + 3 = 5', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-operator-plus'));
    fireEvent.click(document.querySelector('.button-number-3'));
    fireEvent.click(document.querySelector('.button-equals'));
    const result = document.querySelector('.display__result').textContent;
    expect(result).toBe('5');
  });

  test('2 + 3 - 5 = 0', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-operator-plus'));
    fireEvent.click(document.querySelector('.button-number-3'));
    fireEvent.click(document.querySelector('.button-operator-minus'));
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-equals'));
    const result = document.querySelector('.display__result').textContent;
    expect(result).toBe('0');
  });

  test('- 5 * 2 = -10', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-operator-minus'));
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-operator-multiply'));
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-equals'));
    const result = document.querySelector('.display__result').textContent;
    expect(result).toBe('-10');
  });

  test('5 / 2 = 2.5', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-operator-divide'));
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-equals'));
    const result = document.querySelector('.display__result').textContent;
    expect(result).toBe('2.5');
  });

  test('5 % 3 = 2', () => { //to be 
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-percent'));
    fireEvent.click(document.querySelector('.button-number-3'));
    fireEvent.click(document.querySelector('.button-equals'));
    const result = document.querySelector('.display__result').textContent;
    expect(result).toBe('2');
  });
});

describe('Calculator renders correctly the previous calculation', () => {
  test('History shown after 2 + 3 = 5 is correct', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-operator-plus'));
    fireEvent.click(document.querySelector('.button-number-3'));
    fireEvent.click(document.querySelector('.button-equals'));
    const calculation = document.querySelector('.display__calculation').textContent;
    expect(calculation).toBe('2+3');
  });
  test('History shown after  - 5 * 2 is correct', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-operator-minus'));
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-operator-multiply'));
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-equals'));
    const calculation = document.querySelector('.display__calculation').textContent;
    expect(calculation).toBe('-5*2');
  });
  test('History shown after 5 / 2 = 2.5 is correct', () => {
    render(<Calculator />);
    fireEvent.click(document.querySelector('.button-number-5'));
    fireEvent.click(document.querySelector('.button-operator-divide'));
    fireEvent.click(document.querySelector('.button-number-2'));
    fireEvent.click(document.querySelector('.button-equals'));
    const calculation = document.querySelector('.display__calculation').textContent;
    expect(calculation).toBe('5/2');
  });
});
