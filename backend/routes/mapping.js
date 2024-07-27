const express = require('express');
const router = express.Router();
const VolunteerStudentMapping = require('../models/VolunteerStudentMapping');

// Add a new volunteer-student mapping
router.post('/', async (req, res) => {
  try {
    const mapping = new VolunteerStudentMapping(req.body);
    await mapping.save();
    res.status(201).send(mapping);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all mappings
router.get('/', async (req, res) => {
  try {
    const mappings = await VolunteerStudentMapping.find();
    res.status(200).send(mappings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific mapping by ID
router.get('/:id', async (req, res) => {
  try {
    const mapping = await VolunteerStudentMapping.findById(req.params.id);
    if (!mapping) {
      return res.status(404).send();
    }
    res.status(200).send(mapping);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a mapping by ID
router.patch('/:id', async (req, res) => {
  try {
    const mapping = await VolunteerStudentMapping.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!mapping) {
      return res.status(404).send();
    }
    res.status(200).send(mapping);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a mapping by ID
router.delete('/:id', async (req, res) => {
  try {
    const mapping = await VolunteerStudentMapping.findByIdAndDelete(req.params.id);
    if (!mapping) {
      return res.status(404).send();
    }
    res.status(200).send(mapping);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;