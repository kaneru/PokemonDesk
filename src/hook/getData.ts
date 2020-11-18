import { useState, useEffect } from 'react';
import req from '../utils/request';

interface IPokemonGlobal {
  count: number;
  limit: number;
  offset: number;
  pokemons: Array<IPokemonData>;
  total: number;
}

interface IPokemonData {
  name: string;
  id: number;
  img: string;
  types: string[];
  stats: {
    attack: number;
    defense: number;
  };
}

const useData = (endpoint: string) => {
  const [data, setData] = useState<IPokemonGlobal>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
