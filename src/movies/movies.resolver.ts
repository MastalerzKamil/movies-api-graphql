import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';

@Resolver((of) => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query((returns) => Movie, { name: 'movie' })
  async getMovie(@Args('id', { type: () => Int }) id: string) {
    return this.moviesService.getAllMovies();
  }
}
