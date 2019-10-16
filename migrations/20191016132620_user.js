
exports.up = function(knex) {
  return knex.schema.createTable('user', quotes => {
      quotes.increment();
      quotes.string('username', 20).notNullable().unique()
      quotes.string('password', 10).notNullable()
      quotes.string('department', 5).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user")
};
