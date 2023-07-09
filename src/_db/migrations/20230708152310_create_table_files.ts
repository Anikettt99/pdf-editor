import { Knex } from 'knex';
import { commonFields, id } from '../helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('files', (table) => {
    id(table);
    table.string('name').notNullable();
    table.string('mime_type').notNullable();
    table.string('url').notNullable();
    table.boolean('is_deleted').defaultTo(false);
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('files');
}
