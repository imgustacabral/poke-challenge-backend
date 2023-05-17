import { Pokemon } from '../pokemon.entity';

export abstract class PokemonRepository {
  abstract find(covenant: Pokemon): Promise<Pokemon>;
}
