const db = require('../dbConfig');

const addProject = async project => {
  const newProject = await db('projects').insert(project);
  return db('projects').where({ id: newProject[0] });
};

const getProject = id => {
  return db('projects').where({ id });
};

module.exports = {
  addProject,
  getProject
};
