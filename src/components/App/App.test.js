import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App.js';

afterEach(cleanup);
test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const title = getByText('StashPoint Search');
  expect(title.textContent).toBe('StashPoint Search');
});
