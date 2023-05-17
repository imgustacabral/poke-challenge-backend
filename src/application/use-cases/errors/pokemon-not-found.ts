export class PokemonNotFound extends Error {
  constructor() {
    super('Pokemon not found.');
  }
}
