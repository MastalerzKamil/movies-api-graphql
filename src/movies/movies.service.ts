import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieInput } from './inputs/createMovieInput';
import { Movie, MovieDocument, movieSchemaToken } from './schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(movieSchemaToken)
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieInput: CreateMovieInput): Promise<Movie> {
    const newMovie = new this.movieModel(createMovieInput);
    return await newMovie.save();
  }

  async findByYear(year: number): Promise<Movie[]> {
    return await this.movieModel.find({ year }).exec();
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec();
  }
}
