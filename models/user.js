var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const user = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByName = (username, callback) => {
    const query = { username: username };
    user.findOne(query, callback);
}