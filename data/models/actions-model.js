const db = require('../dbConfig');

const addAction = async action => {
  const newAction = await db('actions').insert(action);
  return db('actions').where({ id: newAction[0] });
};

module.exports = {
  addAction
};
