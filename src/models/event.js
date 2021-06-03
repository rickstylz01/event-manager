// Require Mongoose
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	image: {
		type: String
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