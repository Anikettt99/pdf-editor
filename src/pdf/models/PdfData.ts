import { Model } from 'objection';
import { File } from 'src/file';

export class PdfData extends Model {
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
