const express = require('express');
const applicantRouter = express.Router();
const {
  registerApplicant,
  getApplicants,
} = require('../controllers/applicantController.js');
const verifyAdmin = require('../middleware/auth.js');

// Public route for registration
applicantRouter.post('/', registerApplicant);

// Admin route to view all applicants
applicantRouter.get('/', verifyAdmin, getApplicants);

module.exports = applicantRouter;
