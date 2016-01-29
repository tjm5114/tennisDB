var mongoose = require('mongoose');

var TennisCourtSchema = new mongoose.Schema({
	name: String,
	city: String,
	reserved: Boolean,
	capacity: String,
	updated_at: {type: Date, default:Date.now},
});

module.exports = mongoose.model('TennisCourt', TennisCourtSchema);