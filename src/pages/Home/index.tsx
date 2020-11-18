import React from 'react';
import { navigate } from 'hookrouter';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Parallax from '../../components/Parallax';

import s from './Home.module.scss';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout>
        <div className={s.content}>
          <Heading tag="h1">
            <b>Find</b> all your favourite <b>Pokémon</b>
          </Heading>
          <Heading tag="h4">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokémons</Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  );
};

export default HomePage;
