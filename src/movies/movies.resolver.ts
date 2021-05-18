import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateMovieDto } from './dto/create-movie.dto';
import { CreateMovieInput } from './inputs/createMovieInput';
import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';

@Resolver()
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query(() => String, { name: 'theMostRecommendedMovie' })
  async getMostRecommendedMovie(): Promise<string> {
    return 'Fast & Furious 7';
  }

  @Query(() => [CreateMovieDto], { name: 'allMovies' })
  async getMovies() {
    return this.moviesService.findAll();
  }

  @Mutation(() => [CreateMovieDto], { name: 'createMovie' })
  async postMovie(@Args('input') input: CreateMovieInput) {
    return this.moviesService.create(input);
  }
}
