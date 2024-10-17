import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add todo button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/add todo/i);
  expect(buttonElement).toBeInTheDocument();
});
