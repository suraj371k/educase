const express = require('express');
const cors = require('cors');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/schools', schoolRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
