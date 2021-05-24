const express = require('express');
const app = express();
const port = 4000;
const dbsetup = require('./database/setup');
const bookRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

// SETUP EXPRESS
app.use(express.json());
// SETUP DB
dbsetup();

// REQUIRE ROUTES
app.use(bookRoutes);
app.use('/auth', authRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`));
