import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <div>
          <h1>
            <b>Find</b> all your favourite <b>Pokémon</b>
          </h1>
          <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => {}}>See Pokémons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
