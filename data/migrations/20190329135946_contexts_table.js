exports.up = function(knex) {
  return knex.schema.createTable('contexts', tbl => {
    tbl.increments();
    tbl
      .string('contextName', 128)
      .notNullable()
      .unique();
    tbl.string('contextDesc').defaultTo('');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contexts');
};
