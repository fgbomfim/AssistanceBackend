const knexfile = {
  client: 'postgresql',
  connection: {
    database: 'db',
    user: 'postgres',
    password: 'password'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

export default knexfile;

