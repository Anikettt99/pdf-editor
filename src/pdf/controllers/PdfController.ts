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

  @Get()
  async getAllPdfs(@Req() req: Request, @Res() res: Response) {
    const response = await this.pdfServcie.getAllPdfs();
    return res.status(200).json(response);
  }

  @Patch()
  @UseInterceptors(FileInterceptor('file'))
  async updatePdf(
    @Req() req: Request,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.pdfServcie.updatePdf(req.body, file);
    return res.status(200).send('Pdf Updated Sucessfully!');
  }

  @Get('default-pdf')
  async getDefaultPdf(@Req() req: Request, @Res() res: Response) {
    const response = await this.pdfServcie.getPdf({ id: 1 });
    return res.status(200).json(response);
  }

  @Get('/:id')
  async getPdfById(@Req() req: Request, @Res() res: Response) {
    const pdfId = req.params;
    const response = await this.pdfServcie.getPdf(pdfId);
    return res.status(200).json(response);
  }
}
