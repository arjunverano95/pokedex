import useSWR from 'swr';

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
export const usePokemon = () => {
  const {data, isLoading} = useSWR<PokemonCard[]>(
    `${PokeAPIBaseUrl}/pokemon?limit=50&offset=0`,
    (url) => {
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
    },
  );
  return {
    isLoading,
    data,
  };
};
