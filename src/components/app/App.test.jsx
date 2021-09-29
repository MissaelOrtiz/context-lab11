import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import ThemeProvider from '../../hooks/ThemeProvider';

describe('App test', () => {
  it('renders app and changes background color', async () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const colorDiv = screen.getByTestId('themeDiv');
    const button = await screen.getByRole('button', { name: 'themeButton' });
    fireEvent.click(button);
    waitFor(() => {
      expect(colorDiv).toHaveStyle({
        foreground: '#000000',
        background: '#eeeeee'
      });
    });
  });
});
