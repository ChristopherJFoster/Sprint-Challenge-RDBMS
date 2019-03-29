exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('projName', 128).notNullable();
    tbl.string('projDesc');
    tbl.boolean('projComp').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
