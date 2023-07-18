import { Model } from 'objection';
import { KNEX_CONNECTION } from '../constants';
import Knex from 'knex';
import { BaseModel } from './BaseModel';

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

      BaseModel.knex(connection);
      return connection;
    },
  },
];
