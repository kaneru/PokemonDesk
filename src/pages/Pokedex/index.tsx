import React from 'react';

import s from './Pokedex.module.scss';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout>
        <p>Pokedex dummy page</p>
      </Layout>
    </div>
  );
};

export default PokedexPage;
