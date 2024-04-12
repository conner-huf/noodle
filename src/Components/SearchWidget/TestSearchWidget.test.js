import { render, fireEvent, screen } from "@testing-library/react";
import SearchWidget from "./SearchWidget";

test("Search Widget renders", () => {
  render(<SearchWidget />);
});

test("Search submit button renders", () => {
  render(<SearchWidget />);
  const submitButton = screen.getByRole('button', { type: 'submit' });
  expect(submitButton).toBeInTheDocument();
});

test("Input field renders and can receive input", () => {
  render(<SearchWidget />);
  const inputField = screen.getByPlaceholderText('Enter city name');
  expect(inputField).toBeInTheDocument();
  fireEvent.change(inputField, { target: { value: 'Los Angeles' } });
  expect(inputField.value).toBe('Los Angeles');
});