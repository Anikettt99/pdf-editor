import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('files').insert([
    {
      id: 1,
      name: 'example',
      mimeType: 'application/pdf',
      url: process.env.DEFAULT_PDF_URL,
    },
  ]);
}
