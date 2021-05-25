import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/entities/dto/user.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    
    @Post()
    validateUser(@Body() user: CreateUserDto) {
        console.log('ssss');
        return this.authService.login(user);
    }    

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
      return this.authService.create(createUserDto);
    }
    // @Post()
    // validateUser(@Body() user: CreateUserDto) {
    //     console.log('ssss');
    //     return user.token;
    // }    

    // @Get()
    // @SetMetadata('roles', ['admin'])
    // getpromisen(@Body() user: CreateUserDto) {
    //     console.log('mnhmn');
        
    // return user[0];
//   }





}