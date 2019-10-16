
exports.up = function(knex) {
  return knex.schema.createTable('user', quotes => {
      quotes.increment();
      quotes.string('username', 32).notNullable().unique()
      quotes.string('password', 22).notNullable()
      quotes.string('department', 20).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
