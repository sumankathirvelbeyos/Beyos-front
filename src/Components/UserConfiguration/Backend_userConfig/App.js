// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data store for users
let users = [
  {
    userImage: 'https://via.placeholder.com/80x80?text=HP',
    name: 'Hari',
    email: 'johndoe@example.com',
    role: 'Admin',
    status: 'Active'
  }
];

// Endpoint to get all users
app.get('/userconfig', (req, res) => {
  res.status(200).json(users);
});

// Endpoint to add a new user
app.post('/userconfig', (req, res) => {
    const { name, email, role, status } = req.body;
  
    // Assign default status if not provided
    const userStatus = status || 'Active';
  
    const newUser = {
      userImage: `https://via.placeholder.com/80x80?text=${name.charAt(0).toUpperCase()}`,
      name,
      email,
      role,
      status: userStatus
    };
  
    // Save newUser to the database or data store
    users.push(newUser);
  
    res.status(201).json(newUser);
  });
  
// Endpoint to delete a user by email
app.delete('/userconfig/:email', (req, res) => {
  const { email } = req.params;

  // Check if the user is 'Hari' (constant user) to prevent deletion
  if (email === 'johndoe@example.com') {
    return res.status(400).json({ error: 'Cannot delete constant user Hari.' });
  }

  // Filter out the user to be deleted
  const filteredUsers = users.filter(user => user.email !== email);

  // Check if a user was removed
  if (filteredUsers.length === users.length) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Update the users array
  users = filteredUsers;
  res.status(200).json({ message: 'User deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("your endpoint will be:http://127.0.0.1:8080/userconfig ");
