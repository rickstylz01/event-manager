// Require Mongoose
const mongoose = require('mongoose');

/*
Define schema

REQUIRED Categories!!
title - string
cost (num greater than 0)
category (busines, casual, party, general)
*/

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	cost: {
		type: Number,
		required: true,
		min: 1
	},
	category: {
		type: String,
		required: true,
		enum: ["business", "casual", "party", "general", "concert"],
		default: "general"
	}
});

// export function to create model class
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;