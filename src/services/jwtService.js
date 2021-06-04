const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const expiry = Number(process.env.TOKEN_EXPIRY);

exports.createToken = (user) => {
	try {
		let token = jwt.sign({
			id: user._id,
			userName: user.userName,
			email: user.email,
			role: user.role
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