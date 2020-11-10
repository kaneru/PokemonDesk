import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';

const App: React.FC = () => {
  const match = useRoutes(routes);

  return match;
};

export default App;
