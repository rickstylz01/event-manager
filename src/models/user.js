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
	}
})

module.exports = mongoose.model('User', userSchema);