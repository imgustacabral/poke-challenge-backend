import { Controller, Get, Param } from '@nestjs/common';
import { FindPokemon } from '../../../application/use-cases/find-pokemon-abilities';
import { PokemonViewModel } from '../view-model/pokemon-view-model';
import { ApiTags } from '@nestjs/swagger';

@Controller('/pokemon')
export class FindPokemonController {
  constructor(private findPokemon: FindPokemon) {}

  @ApiTags('pokemon')
  @Get(':name')
  async find(@Param('name') name: string) {
    const pokemon = await this.findPokemon.execute({
      name,
    });

    return PokemonViewModel.toHTTP(pokemon);
  }
}
