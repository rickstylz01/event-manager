const Event = require('../models/event');
const superagent = require('superagent');

// creates a new event
exports.createNewEvent = function (req, res) {
	let reqCategory = req.body.category;
	let image;
	// send get request to url to fetch image that matches the category
	superagent.get('https://imagegen.herokuapp.com/')
	.query({ category: reqCategory })
	.end((err, response) => {
		if (err) {
			return res.status(500).json({message: err});
		} else {
			image = response.body.image;
		}
	})
	Event.create({
		title: req.body.title,
		image: image,
		cost: req.body.cost,
		category: reqCategory
	}, (err, newEvent) => {
		if (err) {
			return res.status(500).json({message: err});
		} else {
			res.status(200).json({message: 'new event created', newEvent});
		}
	})
}

// fetches all events
exports.fetchEvents = (req, res) => {
	// search for events by category
	let conditions = {};
	if (req.query.category) {
		conditions.category = req.query.category;
	}
	Event.find(conditions, (err, events) => {
		if (err) {
			return res.status(500).json({message: err});
		} else {
			return res.status(200).json({events});
		}
	})
}

// fetches single event
exports.fetchSingleEvent = (req, res) => {
	Event.findOne({_id: req.params.id}, (err, event) => {
		if (err) {
			return res.status(500).json({message: err});
		} else if (!event) {
			return res.status(404).json({message: "event not found"});
		} else {
			return res.status(200).json({event});
		}
	})
}

// update single event 
exports.updateSingleEvent = (req, res) => {
	Event.findByIdAndUpdate(req.params.id, {
		title: req.body.title,
		category: req.body.category,
		cost: req.body.cost
	}, (err, event) => {
		if (err) {
			return res.status(500).json({message: err});
		} else if (!event) {
			return res.status(404).json({message: "event not found"});
		} else {
			event.save((err, savedEvent) => {
				if (err) {
					return res.status(400).json({message: err});
				} else {
					return res.status(200).json({message: "event updated successfully"})
				}
			});
		}
	})
}

// delete event
exports.deleteSingleEvent = (req, res) => {
	Event.findByIdAndDelete(req.params.id, (err, event) => {
		if (err) {
			return res.status(500).json({message: err});
		} else if (!event) {
			return res.status(404).json({message: "event not found"});
		} else {
			return res.status(200).json({message: "event deleted successfully"});
		}
	})
}