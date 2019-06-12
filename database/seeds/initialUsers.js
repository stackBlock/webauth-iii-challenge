
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'initialUser_U', password: 'initialUser_P', department: 'initialUser_D' },
      ]);
    });
};
