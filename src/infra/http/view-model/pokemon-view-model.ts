import { Pokemon } from '../../../application/entities/pokemon.entity';

export class PokemonViewModel {
  static toHTTP(pokemon: Pokemon) {
    return {
      name: pokemon.name,
      abilities: pokemon.abilities,
    };
  }
}
