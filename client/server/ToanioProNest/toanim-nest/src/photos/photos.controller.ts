import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res } from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';


export const storage = {

    storage: diskStorage({
      destination: './uploads/pdff',
      filename: (req, file, cb) => {
        const filename = `${req['headers']['id']}.pdf`
        cb(null, `${filename}`)
      }
    })
  }
@Controller('photos')
export class PhotosController {

    // @Get('get-uploaded')
    // getUploadedFile(@Res() res: any): any {
    //   console.log("pdf ",storage.storage.destination)
    //   return res.sendFile(join(process.cwd(), 'uploads', 'blog-postman-requests.postman_collection.json'))
  
    // }

    @Post('upload')
  @UseInterceptors(FileInterceptor('pdf', storage))
  uploadFile(@UploadedFile() file) {
    console.log("pdf1 ",file)
    return { filename: file.filename }
  }

  @Get('getFile/:id')
  async getfile(@Param('id') id, @Res() res) {
    console.log("pdf2 ");

    console.log(" id pdf2 ", id);
    return res.sendFile(join(process.cwd(), `uploads/pdf/${id}`))
  }

  @Get('getFile2/:id')
  async getfile2(@Param('id') id, @Res() res) {
    console.log("pdf2 ");

    console.log(" id pdf2 ", id);
    return res.sendFile(join(process.cwd(), `uploads/pdff/`))
  }
}
