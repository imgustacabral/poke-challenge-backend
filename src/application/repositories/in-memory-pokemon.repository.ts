import { Pokemon } from '../entities/pokemon.entity';
import { PokemonRepository } from './pokemon.repository';

export class InMemoryPokemonRepository implements PokemonRepository {
  public pokemons = [
    {
      name: 'Pikachu',
      abilities: ['teste', 'teste'],
    },
  ];
  async find(name: string): Promise<Pokemon> {
    const findedPokemon = this.pokemons.find((poke) => {
      return poke.name === name;
    });

    return new Pokemon({
      name,
      abilities: findedPokemon.abilities,
    });
  }
}
