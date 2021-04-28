import { Args, Int, Resolver } from '@nestjs/graphql';
import { Query } from 'mongoose';
import { Movie } from './models/movie.model';
import { MoviesService } from './movies.service';

@Resolver((of) => Movie)
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query((returns) => Movie)
  async getAuthor(@Args('id', { type: () => Int }) id: string) {}
}
