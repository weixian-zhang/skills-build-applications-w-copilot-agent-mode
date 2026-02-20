import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker sidebar', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/OctoFit Tracker/i);
  expect(brandElement.length).toBeGreaterThan(0);
});

test('renders sidebar navigation links', () => {
  render(<App />);
  expect(screen.getByText(/Activities/i)).toBeInTheDocument();
  expect(screen.getByText(/Leaderboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Teams/i)).toBeInTheDocument();
  expect(screen.getByText(/Workouts/i)).toBeInTheDocument();
});
