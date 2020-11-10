import React from 'react';

import EmptyPage from './pages/Empty';
import HomePage from './pages/Home';

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <EmptyPage />,
};

export default routes;
