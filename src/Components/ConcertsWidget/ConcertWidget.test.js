import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConcertsWidget from './ConcertsWidget';

describe('ConcertsWidget', () => {
  test('displays loading spinner when isLoading is true', () => {
    render(<ConcertsWidget isLoading={true} data={[]} />);
    const spinner = screen.getByLabelText('three-dots-loading');
    expect(spinner).toBeInTheDocument();
  });
});

test('displays "No Concerts Found" when data is empty and isLoading is false', () => {
  render(<ConcertsWidget isLoading={false} data={[]} />);
  const message = screen.getByText('No Concerts Found');
  expect(message).toBeInTheDocument();
});

test('sorts and displays concerts correctly', () => {
  const data = [
    { name: 'Concert B', date: '2022-12-31' },
    { name: 'Concert A', date: '2022-01-01' },
  ];
  render(<ConcertsWidget isLoading={false} data={data} />);
  const concerts = screen.getAllByRole('heading', { level: 4 });
  expect(concerts[0]).toHaveTextContent('Concert A');
  expect(concerts[1]).toHaveTextContent('Concert B');
});

test('highlights the selected concert', () => {
  const data = [
    { name: 'Concert A', date: '2022-01-01' },
    { name: 'Concert B', date: '2022-12-31' },
  ];
  render(<ConcertsWidget isLoading={false} data={data} selectedConcert={data[0]} />);
  const concert = screen.getByText('Concert A').closest('.concert-event');
  expect(concert).toHaveClass('selected');
});

test('calls setSelectedConcert when a concert is clicked', () => {
  const setSelectedConcert = jest.fn();
  const data = [
    { name: 'Concert A', date: '2022-01-01' },
  ];
  render(<ConcertsWidget isLoading={false} data={data} setSelectedConcert={setSelectedConcert} />);
  const concert = screen.getByText('Concert A').closest('.concert-event');
  fireEvent.click(concert);
  expect(setSelectedConcert).toHaveBeenCalledWith(data[0]);
});