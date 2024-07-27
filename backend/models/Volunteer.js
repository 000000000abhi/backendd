const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  Test_ID: mongoose.Schema.Types.ObjectId,
  Test_Link: String,
  Test_Status: String,
  Verified_By: mongoose.Schema.Types.ObjectId,
  Verification_Status: String,
  Verification_Date: Date
});

const RecruitmentFormSchema = new Schema({
  Form_ID: mongoose.Schema.Types.ObjectId,
  Submission_Date: Date,
  Form_Status: String,
  Verified_By: mongoose.Schema.Types.ObjectId,
  Verification_Status: String,
  Verification_Date: Date,
  Test: TestSchema
});

const AttendanceSchema = new Schema({
  Attendance_ID: mongoose.Schema.Types.ObjectId,
  Date: Date,
  Status: String
});

const ScheduleSchema = new Schema({
  Schedule_ID: mongoose.Schema.Types.ObjectId,
  Date: Date,
  Time: String,
  Activity: String
});

const DailyClassReportSchema = new Schema({
  Report_ID: mongoose.Schema.Types.ObjectId,
  Date: Date,
  Report: String
});

const NotificationSchema = new Schema({
  Notification_ID: mongoose.Schema.Types.ObjectId,
  Message: String,
  Date: Date,
  Read_Status: String
});

const CommunityMessageSchema = new Schema({
  Message_ID: mongoose.Schema.Types.ObjectId,
  Sender_ID: mongoose.Schema.Types.ObjectId,
  Receiver_ID: mongoose.Schema.Types.ObjectId,
  Message: String,
  Date: Date
});

const AssessmentSchema = new Schema({
  Assessment_ID: mongoose.Schema.Types.ObjectId,
  Student_ID: mongoose.Schema.Types.ObjectId,
  Assessment_Date: Date,
  Score: Number,
  Comments: String
});

const SubjectSchema = new Schema({
  Subject_ID: mongoose.Schema.Types.ObjectId,
  Subject_Name: String
});

const VolunteerSchema = new Schema({
  Volunteer_ID: mongoose.Schema.Types.ObjectId,
  Name: String,
  Email: String,
  Phone: String,
  Join_Date: Date,
  NGO_ID: mongoose.Schema.Types.ObjectId,
  Recruitment_Status: String,
  Username: String,
  Password: String,
  Recruitment_Form: RecruitmentFormSchema,
  Attendance: [AttendanceSchema],
  Schedule: [ScheduleSchema],
  Daily_Class_Report: [DailyClassReportSchema],
  Notifications: [NotificationSchema],
  Community_Messages: [CommunityMessageSchema],
  Assigned_Students: [{ Student_ID: mongoose.Schema.Types.ObjectId, Assignment_Date: Date }],
  Assessments: [AssessmentSchema],
  Subjects_Taught: [SubjectSchema]
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
