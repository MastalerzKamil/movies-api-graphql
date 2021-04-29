import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { DBConnections } from 'src/config/db-connections';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Movie.name, schema: MovieSchema }],
      DBConnections.moviesApp,
    ),
  ],
  providers: [MoviesService, MoviesResolver],
})
export class MoviesModule {}
