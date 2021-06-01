const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
	email: {
		type: String,
		required: true
	}, 
	userName: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	role: {
		type: String,
		enum: ['regular', 'admin'],
		default: "regular"
	}
})

module.exports = mongoose.model('User', userSchema);