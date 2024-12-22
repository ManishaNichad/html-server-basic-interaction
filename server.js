const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing form data

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to display the form (index.ejs)
app.get('/', (req, res) => {
  res.render('index'); // Serves index.ejs
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  // Extracting user data from the form
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
  const message = req.body.message;

  // Passing the extracted data to response.ejs
  res.render('response', { name: name, email: email, age: age, message: message });
});

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
