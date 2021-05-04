import knexfile from '../knexfile';
import knex from 'knex';

const db = knex(knexfile);

db.migrate.latest({
  database: knexfile.connection.database,
  ...knexfile,
})

export default db;