const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');

// Define the route for user registration
router.post('/register', createUser);

module.exports = router;