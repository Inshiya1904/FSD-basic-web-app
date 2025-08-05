const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const applicantRouter = require('./routes/applicantRoutes');
const adminRouter = require('./routes/adminRoutes');




dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/applicants', applicantRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req,res) => {
    res.send("Hello Backend")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
