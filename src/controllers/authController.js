const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = "verySecureSecret";
const expiry = 3600;

exports.registerNewUser = (req, res) => {
	//fetch users details from req.body
	// check if user with this email exists
	User.findOne({email: req.body.email}, (err, existingUser) => {
		if (err) {
			return res.status(500).json({err});
		}
		if (existingUser) {
			return res.status(400).json({message: "a user with this email already exists"})
		}
		User.create({
			userName: req.body.userName,
			email: req.body.email
		}, (err, newUser) => {
			if (err) {
				return res.status(500).json({err});
			}
			// hash users password
			bcrypt.genSalt(10, (err, salt) => {
				if (err) {
					return res.status(500).json({err});
				}
				bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
					if (err) {
						return res.status(500).json({err});
					}
					// save password to db
					newUser.password = hashedPassword;
					newUser.save((err, savedUser) => {
						if (err) {
							return res.status(500).json({err});
						}
						// create jwt for user
						jwt.sign({
							id: newUser._id,
							userName: newUser.userName,
							email: newUser.email
						}, secret, {expiresIn: expiry}, (err, token) => {
							if (err) {
								return res.status(500).json({err});
							}
							// send token to user
							return res.status(200).json({
								message: "user registration successful",
								token
							})
						})
					})
				})
			})
		})
	})
}