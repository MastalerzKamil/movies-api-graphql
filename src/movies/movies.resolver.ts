import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => String, { name: 'theMostRecommendedMovie' })
  async getMostRecommendedMovie(): Promise<string> {
    return 'Fast & Furious 7';
  }
}
