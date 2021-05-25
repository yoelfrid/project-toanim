import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './users/entities/news.entity';
import { NewsModule } from './news/news.module';


@Module({imports: [ 
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1q2w3e4r',
      database: 'testUsers',
      synchronize: true,
      entities: [Users, News],
    }),UsersModule, NewsModule

   ],     
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
