const express = require('express');
const router = express.Router();
const EventCtrl = require('../controllers/eventControllers');
const {authenticateUser, checkIfAdmin} = require('../middlewares/authentication')

// POST request to /events to create a new event
router.post('/events', authenticateUser, EventCtrl.createNewEvent);
// GET request to /events to fetch all events
router.get('/events', authenticateUser, EventCtrl.fetchEvents);
// GET request to /events/:id to fetch a single event
router.get('/events/:id', authenticateUser, EventCtrl.fetchSingleEvent);
// PUT request to /events/:id to update single event
router.put('/events/:id', authenticateUser, checkIfAdmin, EventCtrl.updateSingleEvent);
// DELETE request to /events/:id to delete
router.delete('/events/:id', authenticateUser, checkIfAdmin, EventCtrl.deleteSingleEvent);

module.exports = router;
