const express = require('express');
const applicantRouter = express.Router();
const {
  registerApplicant,
  getApplicants,
} = require('../controllers/applicantController.js');

// Public route for registration
applicantRouter.post('/', registerApplicant);

// Admin route to view all applicants
applicantRouter.get('/', getApplicants);

module.exports = applicantRouter;
