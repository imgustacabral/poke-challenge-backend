import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { Pokemon } from '../../application/entities/pokemon.entity';
import { PokemonViewModel } from '../http/view-model/pokemon-view-model';

interface IPokemonApiResponse {
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

@Injectable()
export class PokeApiService {
  async find(name: string) {
    try {
      const response = await axios.get<IPokemonApiResponse>(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
      );

      const abilities = response.data.abilities.map(
        (ability) => ability.ability.name,
      );

      const pokemon = new Pokemon({
        name: name,
        abilities: abilities.map((ability: string) => `${ability}`),
      });

      return PokemonViewModel.toHTTP(pokemon);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException('Pokemon not found');
      }
    }
  }
}
