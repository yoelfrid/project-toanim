import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, ForbiddenException, BadRequestException, Patch, ParseIntPipe, UseGuards, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './entities/dto/user.dto';
import { Role, Roles } from 'src/gurds/roles.decorator';
// import { AdminGuard } from 'src/gurds/admin.guard';
import { RolesGuard } from "../gurds/admin.guard";
import { Observable, of } from 'rxjs';
import * as path from 'path';
import { join } from 'path'
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';

export const storage = {

  storage: diskStorage({
    destination: './uploads/images',
    filename: (req, file, cb) => {
      const filename = `${req['headers']['id']}.jpg`
      cb(null, `${filename}`)
    }
  })
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  // @Roles(Role.Admin)
  // @UseGuards(RolesGuard)
  findAll() {
    return this.usersService.findAll()
  }
  @Get(':id')
  findOne(@Param('id', ValidationPipe) id: string) {
    console.log('findOne', id);

    // throw new BadRequestException();
    return this.usersService.findOne(+id);
  }
  // @UseGuards(new AdminGuard())

  @Patch(':id')
  update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    console.log("update", createUserDto);
    console.log("update(@Param ", id);

    return this.usersService.update(+id, createUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('get-uploaded')
  getUploadedFile(@Res() res: any): any {
    console.log(storage.storage.destination)
    return res.sendFile(join(process.cwd(), 'uploads', 'blog-postman-requests.postman_collection.json'))

  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(@UploadedFile() file) {
    console.log(file)
    return { filename: file.filename }
  }

  @Get('getFile/:id')
  async getfile(@Param('id') id, @Res() res) {
    console.log("ddd");

    console.log(" id ", id);
    return res.sendFile(join(process.cwd(), `uploads/images/${id}`))
  }
}



