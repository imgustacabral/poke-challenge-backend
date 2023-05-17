import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should be able to (GET) a existing pokemon', () => {
    const pokemonName = 'pikachu';
    return request(app.getHttpServer()).get(`/${pokemonName}`).expect(200);
  });

  it('should not be able to (GET) a inexisting pokemon', () => {
    const pokemonName = 'dnasojida';
    return request(app.getHttpServer()).get(`/${pokemonName}`).expect(404);
  });
});
