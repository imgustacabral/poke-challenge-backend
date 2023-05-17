import { InMemoryPokemonRepository } from '../repositories/in-memory-pokemon.repository';
import { FindPokemon } from './find-pokemon-abilities';

describe('find pokemon', () => {
  it('should be able to find a pokemon with his name', async () => {
    const pokemonRepository = new InMemoryPokemonRepository();

    const findPokemon = new FindPokemon(pokemonRepository);

    const name = 'Pikachu';
    const pokemon = await findPokemon.execute({
      name,
    });

    console.log(pokemon);

    expect(pokemon.abilities[0]).toBe('teste');
  });
});
