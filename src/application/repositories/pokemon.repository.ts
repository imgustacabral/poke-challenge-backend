import { Pokemon } from '../entities/pokemon.entity';

export abstract class PokemonRepository {
  abstract find(covenant: Pokemon): Promise<Pokemon>;
}
