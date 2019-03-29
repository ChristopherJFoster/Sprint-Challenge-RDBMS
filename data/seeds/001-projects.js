exports.seed = function(knex) {
  return knex('projects').insert([
    {
      projName: 'Short Presentation about React Native',
      projDesc: 'Present to PM group about React Native'
    },
    { projName: 'Play Sekiro' },
    { projName: 'Get Exercise', projDesc: 'Get outside, get moving' }
  ]);
};
