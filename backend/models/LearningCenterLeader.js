const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSummarySchema = new Schema({
  Volunteer_ID: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String
});

const StudentSummarySchema = new Schema({
  Student_ID: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String
});

const NotificationSchema = new Schema({
  Notification_ID: mongoose.Schema.Types.ObjectId,
  Message: String,
  Date: Date,
  Read_Status: String
});

const LearningCenterLeaderSchema = new Schema({
  Leader_ID: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String,
  Phone: String,
  NGO_ID: mongoose.Schema.Types.ObjectId,
  Volunteers: [VolunteerSummarySchema],
  Students: [StudentSummarySchema],
  Notifications: [NotificationSchema]
});

module.exports = mongoose.model('LearningCenterLeader', LearningCenterLeaderSchema);
