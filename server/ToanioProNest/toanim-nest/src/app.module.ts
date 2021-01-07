import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth/auth.controller';
import { AuthService } from './auth/auth/auth.service';
import { Users } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({imports: [ 
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1q2w3e4r',
      database: 'testUsers',
      synchronize: true,
      entities: [Users],
    }),UsersModule

   ],     
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
