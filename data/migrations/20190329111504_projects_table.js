exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl
      .string('projName', 128)
      .notNullable()
      .unique();
    tbl.string('projDesc').defaultTo('');
    tbl
      .boolean('projComp')
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
