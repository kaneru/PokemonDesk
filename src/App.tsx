import React from 'react';
import cn from 'classnames';
import './custom.css';
import s from './App.modules.scss';

const App: React.FC = () => {
  return (
    <div className={cn(s.header, 'color')}>
      Hello, world! This is an App component.
    </div>
  );
};

export default App;
