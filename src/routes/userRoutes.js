const express = require('express');
const router = express.Router();
const { createUser, loginUser, updateUser } = require('../controllers/userController'); // Import updateUser

// Define the route for user registration
router.post('/register', createUser);

// Define the route for user login
router.post('/login', loginUser);

// Define the route for updating a user
router.put('/update/:username', updateUser);

module.exports = router;