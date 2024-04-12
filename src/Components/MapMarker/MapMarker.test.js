import React from 'react';
import { render } from '@testing-library/react';
import MapMarker from './MapMarker';

describe('MapMarker', () => {
  test('renders without crashing', () => {
    const marker = {
      name: 'Test Marker',
      geoCode: [51.505, -0.09]
    };

    const setSelectedConcert = jest.fn();
    const selectedConcert = null;

    render(<MapMarker marker={marker} setSelectedConcert={setSelectedConcert} selectedConcert={selectedConcert} />);
  });
});