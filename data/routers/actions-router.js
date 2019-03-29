const router = require('express').Router();

const Actions = require('../models/actions-model');

router.post('/', async (req, res) => {
  const { project_id, actDesc } = req.body;
  if (!project_id || !actDesc) {
    res.status(400).json({
      error: 'Please provide a project ID and an action description.'
    });
  } else if (actDesc.length > 128) {
    res.status(400).json({
      error: 'The action description may not exceed 128 characters.'
    });
  } else {
    try {
      const addedAction = await Actions.addAction(req.body);
      res.status(201).json(addedAction);
    } catch (err) {
      res.status(500).json({
        error: `There was an error while adding the action data. ${err}`
      });
    }
  }
});

module.exports = router;
