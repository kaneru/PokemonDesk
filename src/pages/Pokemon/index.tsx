import React from 'react';

import useData from '../../hook/getData';
import { PokemonRequest } from '../../interface/pokemons';

export interface PokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>This pokemons id equals {data?.name}</div>;
};

export default PokemonPage;
