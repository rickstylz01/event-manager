const Event = require('../models/event');

// creates a new event
exports.createNewEvent = function (req, res) {
	Book.create({
		...req.body
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
			return res.status(200).json({books});
		}
	})
}

// fetches single event
exports.fetchSingleEvent = (req, res) => {
	if (err) {
		return res.status(500).json({message: err});
	} else if (!event) {
		return res.status(404).json({message: "event not found"});
	} else {
		return res.status(200).json({event});
	}
}

// update single event 
exports.updateSingleEvent = (req, res) => {
	Book.findByIdAndUpdate(req.params.id, {
		category: req.body.category
	}, (err, event) => {
		if (err) {
			return res.status(500).json({message: err});
		} else if (!event) {
			return res.status(404).json({message: "event not found"});
		} else {
			event.save((err, savedBook) => {
				if (err) {
					return res.status(400).json({message: err});
				} else {
					return res.status(200).json({message: "event updated successfully"})
				}
			});
		}
	});
}

// delete event
exports.deleteSingleEvent = (req, res) => {
	Book.findByIdAndDelete(req.params.id, (err, event) => {
		if (err) {
			return res.status(500).json({message: err});
		} else if (!event) {
			return res.status(404).json({message: "event not found"});
		} else {
			return res.status(200).json({message: "event deleted successfully"});
		}
	})
}