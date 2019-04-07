
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {id: 1, name: 'Chores', description: 'My weekly chores'},
        {id: 2, name: 'House Maintenance', description: 'Maintenance jobs to track around the property'},
        {id: 3, name: 'Party Setup', description: "Tasks for organising Bill's birthday party"}
      ]);
    });
};
