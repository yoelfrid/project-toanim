import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/entities/dto/user.dto';
import { Observable, of } from 'rxjs';
import { Users } from 'src/users/entities/user.entity';
@Injectable()
export class AuthService {
    [x: string]: any;
    constructor(private usersService: UsersService, private jwtService:JwtService ) { }
    
    async validateUser(signIn: CreateUserDto) {
        console.log('validateUser');
        const { email,password } = signIn
        const user = await this.usersService.findByEmail(email,password);
        if (user) {
            const { password, ...result } = user;
            return result;
        }
            return false
        // throw new UnauthorizedException('אינך קיים במערכת');
    }
    
    async login(login: CreateUserDto) {
        const user = await this.validateUser(login);
        console.log("login");
        
        if(user){
            const payload = { username: user.email, userId: user.id };
        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
        };
    }
    }

    getpromisen(token:string){
        let verify = this.jwtService.verify(token)
       return verify? ['SUUCUSFULL',verify]: 'no permision'
     }

     public async create(user: CreateUserDto): Promise<Users> {
        console.log(user);
        
        return await this.userDb.save(user);
      }
}