exports.up = function(knex) {
  return knex.schema.createTable('action_contexts', tbl => {
    tbl.increments();
    tbl
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('action_constexts');
};
