
const applicantModel = require("../models/applicantModel.js");

// register applicant
exports.registerApplicant = async (req, res) => {
  try {
    const newApplicant = new applicantModel(req.body);
    await newApplicant.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all applicants
exports.getApplicants = async (req, res) => {
  try {
    const applicants = await applicantModel.find();
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
