import React from 'react';

import s from './Pokedex.module.scss';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

const PokedexPage = () => {
  const { data, isLoading, isError } = useData('getPokemons');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something is wrong!</div>;

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.wrapper}>
          <Heading tag="h3">
            {data?.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.pokemonsGrid}>
            {data?.pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                img={pokemon.img}
                types={pokemon.types}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PokedexPage;
