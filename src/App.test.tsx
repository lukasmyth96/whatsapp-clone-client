import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App name="test name" />);
  const linkElement = getByText(/test name/i);
  expect(linkElement).toBeInTheDocument();
});
