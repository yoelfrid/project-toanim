import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private authServ:AuthService,private userServ:UsersService){}

  use(req: any, res: any, next: () => void) {
    if (req.method=='POST') {
      let token = this.authServ.login(req.body)
        req.body.token = token
    }
    else if(req.method=='GET'){
      let token = req.headers.authorization.split(" ")[1]
      let user = this.authServ.getpromisen(token);
      req.body = user
    }
    next();
  }
}