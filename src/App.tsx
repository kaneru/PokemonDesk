import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
