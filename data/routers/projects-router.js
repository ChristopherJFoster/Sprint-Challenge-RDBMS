const router = require('express').Router();

const Projects = require('../models/projects-model');

router.post('/', async (req, res) => {
  const { projName } = req.body;
  if (!projName) {
    res.status(400).json({
      error: 'Please provide a project name.'
    });
  } else {
    try {
      const addedProject = await Projects.addProject({
        projName
      });
      res.status(201).json(addedProject);
    } catch (err) {
      res.status(500).json({
        error: `There was an error while adding the project data. ${err}`
      });
    }
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const projActs = await Projects.getProject(id);
    if (projActs.length > 0) {
      const { id, name, description, completed } = projActs[0];
      const actions = projActs.map(action => {
        if (!action.actionId) {
          return 'Add some actions to your project!';
        } else {
          return {
            id: action.actionId,
            description: action.actDesc,
            notes: action.actNotes,
            completed: action.actComp
          };
        }
      });
      res.status(200).json({ id, name, description, completed, actions });
    } else {
      res.status(404).json({
        error: 'There is no project with the specified ID.'
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `There was an error while retrieving the project data. ${err}`
    });
  }
});

module.exports = router;
