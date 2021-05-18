import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie, MovieDocument, movieSchemaToken } from './schemas/movie.schema';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(movieSchemaToken)
    private readonly movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = new this.movieModel(createMovieDto);
    return await newMovie.save();
  }

  async findByYear(year: number): Promise<Movie[]> {
    return await this.movieModel.find({ year }).exec();
  }
}
