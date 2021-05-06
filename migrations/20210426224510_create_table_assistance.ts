import knex, { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('assistance', (table: Knex.TableBuilder) => {
    table.string('id').primary()
    table.bigInteger('boys').nullable()
    table.bigInteger('girls').nullable()
    table.bigInteger('littleLady').nullable()
    table.bigInteger('youthMan').nullable()
    table.bigInteger('elders').nullable()
    table.bigInteger('deacons').nullable()
    table.bigInteger('officialCoWorker').nullable()
    table.bigInteger('youthCoWorker').nullable()
    table.bigInteger('localSupervisors').nullable()
    table.bigInteger('regionalSupervisors').nullable()
    table.bigInteger('musician').nullable()
    table.bigInteger('youthAssistant').nullable()
    table.bigInteger('auxiliaryDoors').nullable()
    table.bigInteger('brotherhood').nullable()
    table.string('date').nullable()
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('assistance');
}