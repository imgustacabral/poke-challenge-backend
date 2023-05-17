import { FindPokemon } from '../../../application/use-cases/find-pokemon-abilities';
import { Pokemon } from '../../../application/entities/pokemon.entity';
import { FindPokemonController } from './find-pokemon-abilities.controller';

describe('find pokemon controller', () => {
  it('should be able to find a pokemon by name and return it in the HTTP response format', async () => {
    const findPokemon = new FindPokemon(null);
    const pokemon = new Pokemon({
      name: 'Pikachu',
      abilities: ['Electricity'],
    });
    jest.spyOn(findPokemon, 'execute').mockResolvedValue(pokemon);

    const findPokemonController = new FindPokemonController(findPokemon);

    const httpResponse = await findPokemonController.find('Pikachu');

    expect(httpResponse).toEqual({
      name: 'Pikachu',
      abilities: ['Electricity'],
    });
  });
});
