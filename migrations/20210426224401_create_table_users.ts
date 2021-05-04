import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').unique()
    table.string('password').notNullable()
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}