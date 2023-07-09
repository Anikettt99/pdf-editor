import { Knex } from 'knex';
import { commonFields, id } from '../helpers';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pdf_data', (table) => {
    id(table);
    table
      .bigInteger('file_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('files');
    table.string('text_1').notNullable();
    table.string('text_2').notNullable();
    table.string('text_3').notNullable();
    table.string('jobtype_1').notNullable();
    table.string('text_4').notNullable();
    table.string('text_5').notNullable();
    table.string('text_6').notNullable();
    table.string('jobtype_2').notNullable();
    table.boolean('is_deleted').defaultTo(false);
    commonFields(knex, table);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('pdf_data');
}
