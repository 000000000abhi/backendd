const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  Subject_ID: mongoose.Schema.Types.ObjectId,
  Subject_Name: String
});

const BackupVolunteerSchema = new Schema({
  Volunteer_ID: mongoose.Schema.Types.ObjectId,
  Availability: String
});

const StudentSchema = new Schema({
  Student_ID: mongoose.Schema.Types.ObjectId,
  Name: String,
  Age: Number,
  Email: String,
  Phone: String,
  Enrollment_Date: Date,
  NGO_ID: mongoose.Schema.Types.ObjectId,
  Assigned_Volunteers: [{ Volunteer_ID: mongoose.Schema.Types.ObjectId, Assignment_Date: Date }],
  Subjects_To_Learn: [SubjectSchema],
  Backup_Volunteers: [BackupVolunteerSchema]
});

module.exports = mongoose.model('Student', StudentSchema);
