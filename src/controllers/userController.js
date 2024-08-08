const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Handle user login
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Login logic here
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update user information
const updateUser = async (req, res) => {
  try {
    const { username } = req.params;
    const { newUsername } = req.body;
    const user = await User.findOneAndUpdate({ username }, { username: newUsername }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser, loginUser, updateUser };