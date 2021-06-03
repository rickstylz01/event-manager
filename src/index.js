const express = require('express');
const app = express();
const dbsetup = require('./database/setup');
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');
const port = process.env.PORT;
require('dotenv').config();

// SETUP EXPRESS
app.use(express.json());

// SETUP DB
dbsetup();

// REQUIRE ROUTES
app.use(eventRoutes);
app.use('/auth', authRoutes);

// SEEDERS
const {seedAdmin} = require('./seeders/admin');

app.listen(port, () => console.log(`app listening on port ${port}`));
