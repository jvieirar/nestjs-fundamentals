import { Module } from '@nestjs/common';
import { SuperheroesModule } from './modules/superheroes/superheroes.module';

@Module({
  imports: [SuperheroesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
