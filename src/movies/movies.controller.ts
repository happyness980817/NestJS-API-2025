import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') movieId: string): Movie | undefined {
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updatedData) {
    return this.moviesService.update(movieId, updatedData);
  }
}
