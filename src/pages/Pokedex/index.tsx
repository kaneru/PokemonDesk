import React, { useState } from 'react';

import s from './Pokedex.module.scss';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  if (isError) return <div>Something is wrong!</div>;

  return (
    <div className={s.root}>
      <Layout className={s.centerLayout}>
        <div className={s.wrapper}>
          <Heading tag="h3">
            {!isLoading && data?.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.searchWrapper}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              className={s.searchInput}
              placeholder="Find your pokémon..."
            />
          </div>
          <div className={s.pokemonsGrid}>
            {!isLoading &&
              data?.pokemons.map((pokemon) => (
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
