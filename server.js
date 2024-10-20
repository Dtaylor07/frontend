// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import cors

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(bodyParser.json());

// // Dummy users for demonstration
// const users = ['user1', 'user2', 'user3'];

// // API endpoint for login
// app.post('/api/login', (req, res) => {
//   const { username } = req.body;

//   if (users.includes(username)) {
//     return res.status(200).json({ message: `Welcome, ${username}!` });
//   } else {
//     return res.status(401).json({ message: 'Unauthorized: User not found' });
//   }
// });

// // GET endpoint to fetch users
// app.get('/api/users', (req, res) => {
//   res.status(200).json(users);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data storage (replace with a database in production)
let users = [];

// POST /login endpoint
app.post('/login', (req, res) => {
  const { username } = req.body;
  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    res.json({ message: 'User already logged in' });
  } else {
    users.push({ username });
    res.json({ message: `User ${username} logged in successfully` });
  }
});

// GET /users endpoint
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


