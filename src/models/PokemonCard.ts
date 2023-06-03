export interface PokemonCard {
  id: string;
  name: string;
  types: string[];
  stats: {name: string; value: number}[];
  imageUrl: string;
}
