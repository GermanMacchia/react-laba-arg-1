import { calculate } from './calculate';

describe('Operations', () => {
  test('Should add correctly', () => {
    expect(calculate(2, 5, '+')).toBe(7);
  });
  test('Should subtract correctly', () => {
    expect(calculate(10, 3, '-')).toBe(7);
  });
  test('Should multiply correctly', () => {
    expect(calculate(7, 11, 'X')).toBe(77);
  });
  test('Should divide correctly', () => {
    expect(calculate(28, 4, '/')).toBe(7);
  });
});
