import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie, MovieDocument, movieSchemaToken } from './schemas/movie.schema';

@Injectable()
export class MoviesService {}
