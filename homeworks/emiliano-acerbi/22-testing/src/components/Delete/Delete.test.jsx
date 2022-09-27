/**
 * @jest-environment jsdom
 */

import Delete from './Delete';

import { render, screen } from '@testing-library/react';

xdescribe('Delete', () => {
  test('renders Delete component', () => {
    render(<Delete />);

    expect(screen.getByText('X')).toBeInTheDocument();
  });
});
