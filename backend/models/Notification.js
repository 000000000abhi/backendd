const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  Notification_ID: mongoose.Schema.Types.ObjectId,
  Recipient_ID: mongoose.Schema.Types.ObjectId,
  Recipient_Type: String, // "Volunteer" or "Student"
  Message: String,
  Date: Date,
  Read_Status: String
});

module.exports = mongoose.model('Notification', NotificationSchema);
