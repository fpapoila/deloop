const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const rootRequire = require.main.require;
const config = rootRequire('./config/config');

const User = mongoose.model('User');

/**
 * Filter an object by list of whitelisted keys
 * @param dirtyObject {array} Object to be filtered
 * @param keyWhiteList {array} Keys to retun
 * @returns {array}
 */
function filterObject(dirtyObject, keyWhiteList) {
	return Object.keys(dirtyObject)
		.filter(key => keyWhiteList.includes(key))
		// eslint-disable-next-line arrow-body-style
		.reduce((cleanObject, key) => {
			return Object.assign(cleanObject, { [key]: dirtyObject[key] });
		}, {});
}

module.exports.read = async (req, res) => {
	const keyWhiteList = ['name', 'email', 'website'];
	const cleanUser = filterObject(req.user, keyWhiteList);

	res.json(cleanUser);
};

module.exports.update = async (req, res) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.user._id },
		req.body,
		{ new: true },
	);

	const token = jwt.sign(user.toObject(), config.superSecret);
	res.json({
		token,
		info: {
			success: true,
			message: 'Your settings have been updated',
		},
	});
};
