import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArtistCardWidget } from './ArtistCardWidget';

describe('ArtistCardWidget', () => {
  test('displays loading spinner when data is not yet fetched', () => {
    render(<ArtistCardWidget artistName="Test Artist" />);
    const spinner = screen.getByLabelText('three-dots-loading');
    expect(spinner).toBeInTheDocument();
  });
});