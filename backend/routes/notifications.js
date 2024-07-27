const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Add a new notification
router.post('/', async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).send(notification);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).send(notifications);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific notification by ID
router.get('/:id', async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).send();
    }
    res.status(200).send(notification);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a notification by ID
router.patch('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!notification) {
      return res.status(404).send();
    }
    res.status(200).send(notification);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a notification by ID
router.delete('/:id', async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);
    if (!notification) {
      return res.status(404).send();
    }
    res.status(200).send(notification);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;