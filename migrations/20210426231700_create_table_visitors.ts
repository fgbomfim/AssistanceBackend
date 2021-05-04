import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('visitors', (table: Knex.TableBuilder) => {
    table.string('id').primary()
    table.integer('assistanceId').references('id').inTable('assistance').notNullable()
    table.string('name').notNullable()
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('visitors');
}