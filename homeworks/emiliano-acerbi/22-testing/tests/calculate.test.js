import { calculate } from '../src/utils/calculate';

describe('operations', () => {
  test('should add correctly', () => {
    expect(calculate(2, 5, '+')).toBe(7);
  });
  test('should subtract correctly', () => {
    expect(calculate(10, 3, '-')).toBe(7);
  });
  test('should multiply correctly', () => {
    expect(calculate(7, 11, 'X')).toBe(77);
  });
  test('should divide correctly', () => {
    expect(calculate(28, 4, '/')).toBe(7);
  });
});
