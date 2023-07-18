import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB } from 'src/core/db';
import { PdfDataContract } from '../contracts';
import { PdfData } from 'src/pdf/models';
import { InjectModel } from 'src/core/helpers';

@Injectable()
export class PdfDataRepository extends DB implements PdfDataContract {
  @InjectModel(PdfData)
  model: PdfData;

  async getPdfData(id): Promise<Record<string, any>> {
    const data = await this.query()
      .alias('pd')
      .withGraphJoined('[fileDetails(defaultSelects)]')
      .where('pd.id', id)
      .first();

    return data;
  }
}
