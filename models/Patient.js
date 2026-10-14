const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  bloodGroup: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  bloodDonationConsent: {
    type: String,
    enum: ['yes', 'no', null],
    default: null
  },
  registeredAt: {
    type: Date,
    default: Date.now
  }
});

// Database-level exact duplicate registration protection across all 7 fields
PatientSchema.index(
  {
    fullName: 1,
    dob: 1,
    gender: 1,
    phone: 1,
    email: 1,
    bloodGroup: 1,
    address: 1
  },
  { unique: true }
);

module.exports = mongoose.model('Patient', PatientSchema);
