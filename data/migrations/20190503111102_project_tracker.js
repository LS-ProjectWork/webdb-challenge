exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', table => {
        table.increments().unique()

        table
            .string('name')
            .notNullable()

        table
            .string('description')

        table
            .boolean('completed');
    })

    .createTable('actions', table => {
        table.increments().unique()

        table
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        table
            .string('description')

        table
            .string('notes')
        table
            .boolean('completed');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actions')
    .dropTableIfExists('projects')
};
