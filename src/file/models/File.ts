import { Model } from 'objection';

export class File extends Model {
  static tableName = 'files';

  static modifiers = {
    defaultSelects(query) {
      query.select('id', 'name', 'mime_type', 'url');
    },
  };
}
