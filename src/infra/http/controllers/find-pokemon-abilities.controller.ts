import { Controller, Get, Param } from '@nestjs/common';
import { FindPokemon } from 'src/application/use-cases/find-pokemon-abilities';
import { PokemonViewModel } from '../view-model/pokemon-view-model';

@Controller('/')
export class FindPokemonController {
  constructor(private findPokemon: FindPokemon) {}

  @Get(':name')
  async find(@Param('name') name: string) {
    const pokemon = await this.findPokemon.execute({
      name,
    });

    return PokemonViewModel.toHTTP(pokemon);
  }
}
