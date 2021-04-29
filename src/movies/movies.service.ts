import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument, movieSchemaToken } from './schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(movieSchemaToken)
    private readonly movieSchema: Model<MovieDocument>,
  ) {}

  async getAllMovies(): Promise<Movie[]> {
    return await this.movieSchema.find();
  }
}
