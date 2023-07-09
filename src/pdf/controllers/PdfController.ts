import {
  Controller,
  Get,
  Patch,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { Request, Response } from 'express';
import { PdfService } from '../services';

@Controller('pdf')
export class PdfController {
  constructor(private pdfServcie: PdfService) {}

  @Patch()
  @UseInterceptors(FileInterceptor('file'))
  async updatePdf(
    @Req() req: Request,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const response = await this.pdfServcie.updatePdf(req.body, file);
    return res.status(200).json(response);
  }

  @Get('default-pdf')
  async getDefaultPdf(@Req() req: Request, @Res() res: Response) {
    const response = await this.pdfServcie.getDefaultPdf();
    return res.status(200).json(response);
  }
}
