import { Module } from '@nestjs/common';
import { PokemonRepository } from '../../application/repositories/pokemon.repository';
import { PokeApiService } from '../pokeapi/pokeapi.service';
import { FindPokemonController } from './controllers/find-pokemon-abilities.controller';
import { FindPokemon } from '../../application/use-cases/find-pokemon-abilities';

@Module({
  imports: [],
  providers: [
    FindPokemon,

    {
      provide: PokemonRepository,
      useClass: PokeApiService,
    },
  ],
  controllers: [FindPokemonController],
})
export class HttpModule {}
