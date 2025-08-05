const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/Admin');

// Register Admin (one-time use or protected)
exports.registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await adminModel.findOne({ email });
    if (existing) return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new adminModel({ email, password: hashedPassword });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully",admin  });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email });

    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, message: "Login successful" , admin});
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
