import React from 'react';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <div className={s.content}>
          <Heading tag="h1">
            <b>Find</b> all your favourite <b>Pokémon</b>
          </Heading>
          <Heading tag="h4">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => {}}>See Pokémons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
