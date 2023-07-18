import { Model } from 'objection';
import { BaseModel } from 'src/core/db/BaseModel';

export class File extends BaseModel {
  static tableName = 'files';

  static modifiers = {
    defaultSelects(query) {
      query.select('id', 'name', 'mime_type', 'url');
    },
  };
}
