const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiry = Number(process.env.TOKEN_EXPIRY);

exports.createToken = (user) => {
	try {
		let token = jwt.sign({
			id: newUser._id,
			userName: newUser.userName,
			email: newUser.email,
			role: newUser.role
		}, secret, {expiresIn: expiry});
		return token;
	} catch (err) {
		console.log(err);
		return null;
	}
}

exports.decodeToken = (token) => {
	try {
		let decodedToken = jwt.verify(token, secret);
		return decodedToken;
	} catch (error) {
		console.log(err);
		return null;
	}
}