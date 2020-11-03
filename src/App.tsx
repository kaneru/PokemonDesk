import React from 'react';
import s from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className={s.site}>
      <Header />
      <div className={s.content}>Hello, world! This is an App component.</div>
      <Footer />
    </div>
  );
};

export default App;
