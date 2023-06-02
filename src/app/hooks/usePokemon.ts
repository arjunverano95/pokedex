import useSWRInfinite, {SWRInfiniteKeyLoader} from 'swr/infinite';

import {PokemonCard} from '../../models/PokemonCard';
import {PokeAPIBaseUrl} from '../constants';
import {api} from '../services';

interface PokeAPIDetailResult {
  name: string;
  url: string;
}
interface PokeAPIResult {
  count: number;
  results: PokeAPIDetailResult[];
}
const PAGE_SIZE = 75;
export const usePokemon = () => {
  const getKey: SWRInfiniteKeyLoader = (index) => {
    const page = index + 1;
    let offset = 0;
    if (page == 0) return null;
    else if (page === 1) offset = 0;
    else {
      offset = PAGE_SIZE * (page - 1);
    }
    return `${PokeAPIBaseUrl}/pokemon?limit=${PAGE_SIZE}&offset=${offset}`;
  };
  const {data, mutate, size, setSize, isValidating, isLoading} = useSWRInfinite<
    PokemonCard[]
  >(getKey, (url) => {
    return api.get(url).then((res: PokeAPIResult) => {
      const promises = res.results.map(
        (item) =>
          new Promise<PokemonCard>((resolve, reject) => {
            api
              .get(item.url)
              .then(({id, name, types}) => {
                const card: PokemonCard = {
                  id,
                  name,
                  types: types.map((item) => item.type.name),
                  imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                };
                resolve(card);
              })
              .catch(() => reject());
          }),
      );
      return Promise.all(promises);
    });
  });

  const pokemons = data ? [].concat(...data) : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return {
    data: pokemons,
    isLoading: isLoadingMore,
    isReachingEnd,
    isRefreshing,
    mutate,
    loadMore: () => {
      if (!isReachingEnd) {
        setSize(size + 1);
      }
    },
    clear: () => {
      setSize(0);
    },
    refresh: () => {
      setSize(1);
    },
  };
};
