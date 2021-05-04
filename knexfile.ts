const knexfile = {
  client: 'postgresql',
  connection: {
    database: 'assistance',
    user: 'postgres',
    password: '350664'
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

