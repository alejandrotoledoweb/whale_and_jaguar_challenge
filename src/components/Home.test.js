import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Whale and Jaguar React Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
