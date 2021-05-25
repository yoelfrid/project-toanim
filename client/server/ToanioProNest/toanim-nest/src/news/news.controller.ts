import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CreateNewDto } from 'src/users/entities/dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Post()
    create(@Body() createUserDto: CreateNewDto) {
      return this.newsService.create(createUserDto);
    }

    @Get()
    findAll() {
      let a = this.newsService.findAll()
      console.log("a ", a);
      return a
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.newsService.remove(+id);
    }
}
