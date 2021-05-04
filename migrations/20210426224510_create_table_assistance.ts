import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('assistance', (table: Knex.TableBuilder) => {
    table.increments('id').primary()
    table.string('boys').nullable()
    table.string('girls').nullable()
    table.string('littleLady').nullable()
    table.string('youthMan').nullable()
    table.string('elders').nullable()
    table.string('deacons').nullable()
    table.string('officialCoWorker').nullable()
    table.string('youthCoWorker').nullable()
    table.string('localSupervisors').nullable()
    table.string('regionalSupervisors').nullable()
    table.string('musician').nullable()
    table.string('youthAssistant').nullable()
    table.string('auxiliaryDoors').nullable()
    table.string('brotherhood').nullable()
    table.string('date').nullable()
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('assistance');
}