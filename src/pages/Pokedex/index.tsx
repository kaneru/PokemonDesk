import React, { useState, useEffect } from 'react';

import s from './Pokedex.module.scss';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

interface Pokemon {
  name: string;
  id: number;
  img: string;
  types: string[];
  stats: {
    attack: number;
    defense: number;
  };
}

const usePokemons = () => {
  const [data, setData] = useState<{ total: number; pokemons: Pokemon[] }>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something is wrong!</div>;

  return (
    <div className={s.root}>
      <Layout>
        <div className={s.wrapper}>
          <Heading tag="h3">
            {data.total} <b>Pokemons</b> for you to choose your favorite
          </Heading>
          <div className={s.pokemonsGrid}>
            {data.pokemons.map((pokemon) => (
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
