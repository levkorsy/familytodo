var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
    description:  String,
    date: String,
    familyMember: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' }
});
module.exports = mongoose.model('Todo', TodoSchema );
