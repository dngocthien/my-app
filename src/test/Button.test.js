import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders with text', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
});

test('handles click', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Submit</Button>);
  fireEvent.click(screen.getByText('Submit'));
  expect(onClick).toHaveBeenCalledTimes(1);
});
