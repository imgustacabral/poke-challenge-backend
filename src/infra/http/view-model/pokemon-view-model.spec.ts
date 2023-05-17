import { Pokemon } from '../../../application/entities/pokemon.entity';
import { PokemonViewModel } from './pokemon-view-model';

describe('pokemon view model', () => {
  it('should be able to convert a pokemon entity to a HTTP response format', () => {
    const pokemon = new Pokemon({
      name: 'Pikachu',
      abilities: ['Electricity'],
    });

    const httpResponse = PokemonViewModel.toHTTP(pokemon);

    expect(httpResponse).toEqual({
      name: 'Pikachu',
      abilities: ['Electricity'],
    });
  });
});
