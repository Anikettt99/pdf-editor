import { Model } from 'objection';
import { KNEX_CONNECTION } from '../constants';
import Knex from 'knex';
import * as KnexConfig from '../../../knexfile';

export const databaseProvider = [
  {
    provide: KNEX_CONNECTION,
    useFactory: async () => {
      const connection = Knex({
        client: 'mysql2',
        connection: {
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: 'password',
          database: 'pdf_editor',
        },
      });

      /*
      const connection = Knex({
        client: process.env.DB_TYPE || 'mysql2',
        connection: {
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
      });
      */
      Model.knex(connection);
      return connection;
    },
  },
];
