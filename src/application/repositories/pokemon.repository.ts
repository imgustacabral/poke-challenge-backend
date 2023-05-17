import { Pokemon } from '../entities/pokemon.entity';

export abstract class PokemonRepository {
  abstract find(pokemon: string): Promise<Pokemon>;
}
