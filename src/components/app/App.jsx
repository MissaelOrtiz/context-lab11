import React from 'react';
import VillagerList from '../villagers/VillagerList';
import VillagerDetail from '../villagers/VillagerDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/"> Home </Link>
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
    </Router>
  );
}
