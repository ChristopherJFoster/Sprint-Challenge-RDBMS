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

module.exports = router;
