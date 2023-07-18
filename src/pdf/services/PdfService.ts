import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { MediaService } from 'src/media/services';
import { PDF_DATA_REPOSITORY } from '../constants';
import { PdfDataContract } from '../repositories';
import { PdfData } from '../models';
import { FILE_REPOSITORY } from 'src/file/constants';
import { File, FileContract } from 'src/file';

@Injectable()
export class PdfService {
  constructor(
    private mediaService: MediaService,
    @Inject(PDF_DATA_REPOSITORY) private pdfData: PdfDataContract,
    @Inject(FILE_REPOSITORY) private file: FileContract,
  ) {}
  async updatePdf(inputs: Record<string, any>, file: Express.Multer.File) {
    const {
      text_1,
      text_2,
      text_3,
      jobtype_1,
      text_4,
      text_5,
      text_6,
      jobtype_2,
    } = inputs;

    if (!file) {
      throw new UnprocessableEntityException('File is mandatory!');
    }

    const { name, mimetype, url } = await this.mediaService.uploadFile(file);

    const trx = await PdfData.startTransaction();
    try {
      const createdFile = await this.file.query(trx).insert({
        name,
        mime_type: mimetype,
        url,
      });
      await this.pdfData.query(trx).insert({
        file_id: createdFile.id,
        text_1,
        text_2,
        text_3,
        jobtype_1,
        text_4,
        text_5,
        text_6,
        jobtype_2,
      });
      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw new Error('Internal Server Error');
    }

    return;
  }

  async getPdf(inputs: Record<string, any>) {
    try {
      const pdfData = await this.pdfData.getPdfData(inputs.id);
      return pdfData;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }

  async getAllPdfs() {
    try {
      const allPdfs = await this.pdfData
        .query()
        .withGraphJoined('[fileDetails(defaultSelects)]');

      return allPdfs;
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
