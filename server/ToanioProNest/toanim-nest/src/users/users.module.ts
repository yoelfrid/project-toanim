import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth/auth.controller';
import { AuthService } from 'src/auth/auth/auth.service';
import { AuthMiddleware } from 'src/auth/auth.middleware';


@Module({
    imports: [TypeOrmModule.forFeature([Users]),
    JwtModule.register({secret:'this is my secret'})],
    controllers: [ UsersController,AuthController],
    providers: [ UsersService,AuthService],
  })
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(AuthMiddleware)
      .forRoutes('auth')
    }
  }