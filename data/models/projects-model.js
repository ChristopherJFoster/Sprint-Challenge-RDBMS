const db = require('../dbConfig');

const addProject = project => {
  return db('projects').insert(project);
};

module.exports = {
  addProject
};
