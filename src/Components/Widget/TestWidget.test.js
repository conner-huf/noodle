import React from 'react';
import { render, screen } from '@testing-library/react';
import { Widget } from './Widget';

describe('Widget', () => {
  test('displays the text "Widget"', () => {
    render(<Widget />);
    const widgetText = screen.getByText('Widget');
    expect(widgetText).toBeInTheDocument();
  });
});