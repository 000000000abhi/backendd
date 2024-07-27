const express = require('express');
const router = express.Router();
const LearningCenterLeader = require('../models/LearningCenterLeader');

// Add a new leader
router.post('/', async (req, res) => {
  try {
    const leader = new LearningCenterLeader(req.body);
    await leader.save();
    res.status(201).send(leader);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all leaders
router.get('/', async (req, res) => {
  try {
    const leaders = await LearningCenterLeader.find();
    res.status(200).send(leaders);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific leader by ID
router.get('/:id', async (req, res) => {
  try {
    const leader = await LearningCenterLeader.findById(req.params.id);
    if (!leader) {
      return res.status(404).send();
    }
    res.status(200).send(leader);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a leader by ID
router.patch('/:id', async (req, res) => {
  try {
    const leader = await LearningCenterLeader.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!leader) {
      return res.status(404).send();
    }
    res.status(200).send(leader);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a leader by ID
router.delete('/:id', async (req, res) => {
  try {
    const leader = await LearningCenterLeader.findByIdAndDelete(req.params.id);
    if (!leader) {
      return res.status(404).send();
    }
    res.status(200).send(leader);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;