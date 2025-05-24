require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Static files
app.use(express.static('public'));

// EJS Templating Engine
app.use(expressLayout);
app.set('layout', "./layouts/main");
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/main'));

// Connect to DB and start server
(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed", err);
  }
})();
