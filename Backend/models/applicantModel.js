const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    role: { type: String, enum: ["Intern", "Volunteer"], required: true },
    motivation: { type: String },
    //   createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const applicantModel = mongoose.model("applicant",applicantSchema)
module.exports = applicantModel