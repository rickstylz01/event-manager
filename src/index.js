const express = require('express');
const app = express();
const port = 4000;
const dbsetup = require('./database/setup');
const bookRoutes = require('./routes/bookRoutes');

// SETUP EXPRESS
app.use(express.json());
// SETUP DB
// dbsetup();
// app.use(bookRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
