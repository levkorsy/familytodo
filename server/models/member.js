var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
    name: String,
    nickname: String,
    description: String
});

module.exports = mongoose.model('Member', MemberSchema);
