import { Injectable } from '@nestjs/common';
import { CreateNewDto } from 'src/users/entities/dto/news.dto';
import { News } from 'src/users/entities/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class NewsService {
    constructor(@InjectRepository(News) private repository: Repository<News>) { }

    public async create(item: CreateNewDto): Promise<News> {
        return await this.repository.save(item);
      }
    
    public async findAll(): Promise<News[]> {
       let dd = this.repository.find();
       console.log("dd ", dd);
       
       return await dd
      }
    
      async remove(id: number) {
        await this.repository.delete(id)
        return `הוסר משתמש ${id} `
      }
}
