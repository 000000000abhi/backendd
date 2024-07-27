const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerStudentMappingSchema = new Schema({
  Mapping_ID: mongoose.Schema.Types.ObjectId,
  Volunteer_ID: mongoose.Schema.Types.ObjectId,
  Student_ID: mongoose.Schema.Types.ObjectId,
  Assigned_Date: Date
});

module.exports = mongoose.model('VolunteerStudentMapping', VolunteerStudentMappingSchema);
