
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'sidewaysbraidjankypurse', password: 'AryaStinkyButt', department: 'HR'},
        {id: 2, username: 'jake1', password: 'IcarusHasFallen', department: "AMCAR"},
        {id: 3, username: 'icarus', password: 'IkelosIsNightmare', department: "EOL"}
      ]);
    });
};
