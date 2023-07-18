import { Model } from 'objection';
import { BaseModel } from 'src/core/db/BaseModel';
import { File } from 'src/file';

export class PdfData extends BaseModel {
  static tableName = 'pdf_data';

  static relationMappings = {
    fileDetails: {
      relation: Model.BelongsToOneRelation,
      modelClass: File,
      join: {
        from: 'pdf_data.file_id',
        to: 'files.id',
      },
    },
  };
}
