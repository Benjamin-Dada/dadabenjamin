//create a model for the details 
var mongoose = require("mongoose");

module.exports = mongoose.model('details', { 
				name : String,
				email: String,
				updated_at: {type: Date, default: Date.now}
});