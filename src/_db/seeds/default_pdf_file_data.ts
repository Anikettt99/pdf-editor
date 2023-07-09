import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('pdf_data').insert([
    {
      file_id: 1,
      text_1: 'One',
      text_2: 'Two',
      text_3: 'Developer',
      jobtype_1: 'fulltime',
      text_4: 'Three',
      text_5: 'Four',
      text_6: 'Testing',
      jobtype_2: 'parttime',
    },
  ]);
}
