exports.up = function(knex) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      // Since it might be desired by the user, deleting a project will delete all associated actions. I would implement a client-side warning so the user is clear about what will happen.
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('actDesc', 128).notNullable();
    tbl.string('actNotes').defaultTo('');
    tbl
      .boolean('actComp')
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('actions');
};
