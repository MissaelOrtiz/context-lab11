/* eslint-disable max-len */
import React from 'react';
import VillagerList from '../villagers/VillagerList';
import VillagerDetail from '../villagers/VillagerDetail';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import VillagerProvider from '../../hooks/VillagerProvider';
import { useTheme, useToggleTheme } from '../../hooks/ThemeProvider';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  }
};

export default function App() {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  return (
    <VillagerProvider>
      <div data-testId="themeDiv" style={{ backgroundColor: themes[theme].background, color: themes[theme].foreground }}>
        <BrowserRouter>
          <header>
            <nav>
              <Link to="/"> Home </Link>
              <button aria-label="themeButton" onClick={() => toggleTheme()}>Change Theme</button>
            </nav>
          </header>
          <Switch>
            <Route path="/:id">
              <VillagerDetail />
            </Route>
            <Route path="/">
              <VillagerList />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </VillagerProvider>
    
  );
}
