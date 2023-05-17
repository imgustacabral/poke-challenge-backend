import { Pokemon } from './pokemon.entity';

describe('Pokemon Entity', () => {
  it('should be able to create a pokemon', () => {
    const pokemon = new Pokemon({
      name: 'Pikachu',
    });

    expect(pokemon.name).toBe('Pikachu');
  });

  it('should not be able to create a pokemon without name', () => {
    expect(() => {
      new Pokemon({
        name: '',
      });
    }).toThrow();
  });
});
