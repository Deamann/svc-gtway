// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Home route to render payment form
app.get('/', (req, res) => {
  res.render('index', { message: '' });
});

// Payment form submission route
app.post('/pay', (req, res) => {
  const { name, amount, cardNumber, expiryDate, cvv } = req.body;

  // Fake payment logic (here we just simulate success)
  if (name && amount && cardNumber && expiryDate && cvv) {
    res.render('index', { message: `Payment of $${amount} by ${name} was successful!` });
  } else {
    res.render('index', { message: 'Payment failed. Please fill in all details correctly.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Payment app is running at http://localhost:${port}`);
});

