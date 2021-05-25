import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './entities/dto/user.dto';
import { Observable, from } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repository: Repository<Users>) { }

  public async create(user: CreateUserDto): Promise<Users> {
    return await this.repository.save(user);
  }
  public async findAll(): Promise<Users[]> {
    let ff = this.repository.find();
    console.log("ff ", ff);
    
    return await  ff
  }
  async findOne(id: number) {
    let cc = this.repository.findOne(id);
    console.log("cc ",cc);
    
    return await cc

    // return `This action returns a #${id} user`;
  }

  findByOnlyEmail(email) {
    return this.repository.findOne({ email })
  }
  async update(id: number, user: CreateUserDto) {
    console.log("repository ", user);
    console.log("repository ", id);

    return await this.repository.update({ id: id }, user);
  }
  async remove(id: number) {
    await this.repository.delete(id)
    return `הוסר משתמש ${id} `
  }
  public async findByEmail(email: string, password: string): Promise<Users | null> {
    const user = await this.repository.find({ email: email, password: password });
    console.log('findByEmail == user ', user);

    if (user) {
      console.log("user by email ", user);
      return user[0];
    }
    throw new HttpException('משתמש עם דוא"ל זה אינו קיים', HttpStatus.NOT_FOUND);
  }

}