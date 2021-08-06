import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn home title', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Whale and Jaguar React Challenge/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(/Go to each section and follow the instructions to fetch the data from each one./i);
  expect(linkElement2).toBeInTheDocument();
});

test('renders learn home description', () => {
  render(<Home />);

  const linkElement2 = screen.getByText(/Go to each section and follow the instructions to fetch the data from each one./i);
  expect(linkElement2).toBeInTheDocument();
});
