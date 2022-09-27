/**
 * @jest-environment jsdom
 */

import Calculator from './Calculator';

import { render, screen } from '@testing-library/react';

describe('Calculator', () => {
  test('renders children correctly', () => {
    render(
      <Calculator>
        <span>Children Test</span>
      </Calculator>,
    );
    const main = screen.getByRole('main');
    expect(main).toContainHTML('<span>Children Test</span>');
  });
});
