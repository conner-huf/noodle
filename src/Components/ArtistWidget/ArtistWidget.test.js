import React from 'react';
import { render, screen } from '@testing-library/react';
import ArtistWidget from './ArtistWidget';

describe('ArtistWidget', () => {
  test('displays loading spinner when data is not yet fetched', () => {
    render(<ArtistWidget artist={{ name: 'Test Artist' }} />);
    const spinner = screen.getByLabelText('three-dots-loading');
    expect(spinner).toBeInTheDocument();
  });
});