const express = require('express');
const adminRouter = express.Router();
const { registerAdmin, loginAdmin } = require('../controllers/adminController');

// Use only when needed (e.g., one-time setup)
adminRouter.post('/register', registerAdmin);
adminRouter.post('/login', loginAdmin);

module.exports = adminRouter;
