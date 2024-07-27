const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  Subject_ID: mongoose.Schema.Types.ObjectId,
  Subject_Name: String
});

module.exports = mongoose.model('Subject', SubjectSchema);
