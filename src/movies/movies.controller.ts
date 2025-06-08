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

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This returns all movies.';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `Movies after year ${searchingYear}:`;
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This returns a movie with the id: ${movieId}`;
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This creates a movie.';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This deletes a movie with the id: ${movieId}`;
  }
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updatedData) {
    return {
      updatedMovie: movieId,
      ...updatedData,
    };
  }
}
