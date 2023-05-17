import { Injectable } from '@nestjs/common';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonRepository } from '../repositories/pokemon.repository';

interface FindPokemonRequest {
  name: string;
}

type FindPokemonResponse = Pokemon;

@Injectable()
export class FindPokemon {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async execute(request: FindPokemonRequest): Promise<FindPokemonResponse> {
    const pokemon = new Pokemon({
      name: request.name,
    });
    const { abilities } = await this.pokemonRepository.find(pokemon.name);

    pokemon.abilities = abilities;
    return pokemon;
  }
}
