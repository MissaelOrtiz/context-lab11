import React from 'react';
import VillagerList from '../villagers/VillagerList';
import VillagerDetail from '../villagers/VillagerDetail';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import VillagerProvider from '../../hooks/VillagerProvider';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/"> Home </Link>
        </nav>
      </header>
      <Switch>
        <VillagerProvider>
          <Route path="/:id">
            <VillagerDetail />
          </Route>
          <Route path="/">
            <VillagerList />
          </Route>
        </VillagerProvider>
      </Switch>
    </BrowserRouter>
  );
}
