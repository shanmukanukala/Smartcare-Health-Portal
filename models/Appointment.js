const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  department: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  consultationType: {
    type: String,
    enum: ['In-Person', 'Online'],
    default: 'In-Person'
  },
  reason: {
    type: String,
    required: true,
    trim: true
  },
  medicalCondition: {
    type: String,
    default: ''
  },
  medications: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Completed', 'Cancelled'],
    default: 'Confirmed'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for high-performance slot capacity queries
AppointmentSchema.index({ doctor: 1, date: 1, time: 1, status: 1 });

module.exports = mongoose.model('Appointment', AppointmentSchema);
