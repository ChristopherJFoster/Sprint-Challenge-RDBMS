exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      actDesc: 'Learn React Native Setup',
      actNotes:
        'Learn now setting up and testing a React Native project is different from a React project.'
    },
    {
      project_id: 1,
      actDesc: 'Follow a React Native tutorial'
    },
    {
      project_id: 2,
      actDesc: 'Set Up Game',
      actNotes:
        'Turn on controller. Load game. Close window shades. Silence phone. Turn off lights.'
    },
    {
      project_id: 3,
      actDesc: 'Get Dressed',
      actNotes: "Put on regular clothes. You can't go outside like that."
    },
    {
      project_id: 3,
      actDesc: 'Walk Really Far',
      actNotes:
        'Walk longer than you really want to. Bring a friend or listen to a podcast.'
    }
  ]);
};
