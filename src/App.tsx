import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

const App: React.FC = () => {
  return <div className={cn(s.header, 'color')}>Hello, world! This is an App component.</div>;
};

export default App;
